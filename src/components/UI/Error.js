import React from "react";

function Error() {
  return (
    <>
      <main className="bg-grey pt-80 pb-50">
        <div className="container">
          <div className="row pt-80">
            <div className="col-lg-6 col-md-12 d-lg-block d-none pr-50">
              <img src="assets/imgs/theme/page-not-found.png" alt="error-404" />
            </div>
            <div className="col-lg-6 col-md-12 pl-50 text-md-center text-lg-left">
              <h1 className="mb-30 font-weight-900 page-404">404</h1>
              <p className="">
                The link you clicked may be broken or the page may have been
                removed.
                <br />
              </p>
              <div className="form-group">
                <button
                  type="submit"
                  className="button button-contactForm mt-30"
                >
                  <a className="text-white" href="/">
                    Home page
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Error;
