import React from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <>
      <main className="bg-grey pt-80 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1 text-center">
                    <h3 className="mb-30 font-weight-900">Create an account</h3>
                  </div>
                  <form method="post">
                    <div className="form-group">
                      <input
                        type="text"
                        required=""
                        className="form-control"
                        name="username"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        required=""
                        className="form-control"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        required=""
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        required=""
                        type="password"
                        name="password"
                        placeholder="Confirm password"
                      />
                    </div>
                    <div className="login_footer form-group">
                      <div className="chek-form">
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox1"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox1"
                          >
                            <span>I agree to terms &amp; Policy.</span>
                          </label>
                        </div>
                      </div>
                      <a className="text-muted" href="/">
                        Lean more
                      </a>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="button button-contactForm btn-block"
                      >
                        Submit &amp; Register
                      </button>
                    </div>
                  </form>
                  <div className="divider-text-center mt-15 mb-15">
                    <span> or</span>
                  </div>
                  <div className="text-muted text-center">
                    Already have an account?{" "}
                    {/* {<a href="/login">Login now</a>} */}
                    {<Link to={"/login"}>Login now</Link>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignupForm;
