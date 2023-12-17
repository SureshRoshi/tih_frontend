import React from "react";

import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Error from "../../components/UI/Error";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <Error />
      <Footer />
    </>
  );
}

export default ErrorPage;
