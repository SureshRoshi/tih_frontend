import React from "react";
import { Outlet, redirect } from "react-router-dom";

import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const searchData = data.get("search-text");
  console.log(searchData);

  return redirect("/blogs");
}
