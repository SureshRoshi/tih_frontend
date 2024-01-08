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
import HomePage, { loader as homeLoader } from "./pages/blogs/HomePage";
import BlogDetailPage from "./pages/blogs/BlogDetailPage";
import AddPost, { action as addPostAction } from "./pages/blogs/AddPost";

import { action as loginAction } from "./components/UI/LoginForm";
import { action as signupAction } from "./components/UI/SignupForm";
import { action as searchAction } from "./components/Layout/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // need to tweek this action, need a add a new route for search functionality
    action: searchAction,
    children: [
      { index: true, element: <Navigate to="blogs" /> },
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "signup", element: <SignupPage />, action: signupAction },
      {
        path: "blogs",
        children: [
          { index: true, element: <HomePage />, loader: homeLoader },
          { path: "add-post", element: <AddPost />, action: addPostAction },
          { path: ":blogId", element: <BlogDetailPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
