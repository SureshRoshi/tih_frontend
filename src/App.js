import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import RootLayout from "./pages/root/Root";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import HomePage, { loader as homeLoader } from "./pages/blogs/HomePage";
import BlogDetailPage, {
  loader as detailLoader,
} from "./pages/blogs/BlogDetailPage";
import AddPost, { action as addPostAction } from "./pages/blogs/AddPost";
import AuthorPage, { loader as authorLoader } from "./pages/author/Author";
import CategoryPage, { loader as tagLoader } from "./pages/category/Category";
import ProfilePage, { loader as profileLoader } from "./pages/profile/Profile";

import { action as loginAction } from "./components/UI/LoginForm";
import { action as signupAction } from "./components/UI/SignupForm";
import { action as searchAction } from "./components/Layout/Navbar";
import { action as logoutAction } from "./pages/auth/Logout";

import { checkAuthLoader, tokenLoader } from "./components/util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    id: "root",
    // need to tweek this action, need a add a new route for search functionality
    action: searchAction,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "signup", element: <SignupPage />, action: signupAction },
      { path: "logout", action: logoutAction },
      { path: "your-profile", element: <ProfilePage />, loader: profileLoader },
      {
        path: "author",
        children: [
          { index: true, element: <Navigate to={":author_name"} /> },
          {
            path: ":author_name",
            element: <AuthorPage />,
            loader: authorLoader,
          },
        ],
      },
      {
        path: "blogs",
        children: [
          { index: true, element: <HomePage />, loader: homeLoader },
          {
            path: "add-post",
            element: <AddPost />,
            action: addPostAction,
            loader: checkAuthLoader,
          },
          {
            path: ":blogId",
            element: <BlogDetailPage />,
            loader: detailLoader,
          },
          {
            path: "tags",
            children: [
              { index: true, element: <Navigate to={":tagId"} /> },
              { path: ":tagId", element: <CategoryPage />, loader: tagLoader },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
