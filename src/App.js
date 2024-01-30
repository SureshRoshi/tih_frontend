import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  // Navigate,
} from "react-router-dom";

import RootLayout from "./pages/root/Root";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage, { loader as homeLoader } from "./pages/blogs/HomePage";
import BlogDetailPage, {
  loader as detailLoader,
} from "./pages/blogs/BlogDetailPage";
import AddPost, { action as addPostAction } from "./pages/blogs/AddPost";

import { action as loginAction } from "./components/UI/LoginForm";
import { action as signupAction } from "./components/UI/SignupForm";
import { action as searchAction } from "./components/Layout/Navbar";
import { action as logoutAction } from "./pages/auth/Logout";

import { checkAuthLoader, tokenLoader } from "./components/util/auth";
import Home from "./pages/Home";

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
      // need to edit this
      { path: "author", element: "Author Element" },
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
          // need to edit this
          {
            path: "tags",
            element: "Tag List Element",
            children: [{ path: "tagId", element: "Tag Detail Element" }],
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
