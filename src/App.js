import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import RootLayout from "./pages/root/Root";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/blogs/HomePage";
import BlogDetailPage from "./pages/blogs/BlogDetailPage";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
