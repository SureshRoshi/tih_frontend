import React, { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import { getTokenDuration } from "../../components/util/auth";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "POST" });
    }

    const tokenDuration = getTokenDuration();
    // console.log(tokenDuration);F

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
