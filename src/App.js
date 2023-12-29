import React, { useContext } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import AuthContentProvider, { AuthContext } from "./store/auth-context";

import RootLayout from "./pages/root/Root";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/blogs/HomePage";
import BlogDetailPage from "./pages/blogs/BlogDetailPage";
import AddPost from "./pages/blogs/AddPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="blogs" /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "blogs", element: <HomePage /> },
      { path: "blogs/:blogId", element: <BlogDetailPage /> },
      { path: "add-post", element: <AddPost /> },
    ],
  },
]);

function App() {
  return (
    <>
      <AuthContentProvider>
        <RouterProvider router={router} />
      </AuthContentProvider>
    </>
  );
}

export default App;
