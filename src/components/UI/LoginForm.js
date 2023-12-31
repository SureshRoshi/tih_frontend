import React from "react";
import { Form, Link, redirect } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <main className="bg-grey pt-80 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1 text-center">
                    <h3 className="mb-30 font-weight-900">Login</h3>
                  </div>
                  <Form method="POST">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="employeeId"
                        placeholder="Employee ID"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
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
                            value="true"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox1"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                      </div>
                      <a className="text-muted" href="/">
                        Forgot password?
                      </a>
                    </div>
                    <div className="form-group ">
                      <button
                        type="submit"
                        className="button button-contactForm btn-block "
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                  <div className="divider-text-center mt-15 mb-15">
                    <span> or</span>
                  </div>
                  <div className="text-muted text-center">
                    Don't Have an Account?{" "}
                    {<Link to={"/signup"}>Sign up now</Link>}
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

export default LoginForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const loginData = {
    empid: data.get("employeeId"),
    password: data.get("password"),
    checkbox: data.get("checkbox"),
  };

  console.log(loginData);

  localStorage.setItem("empid", loginData.empid);
  localStorage.setItem("password", loginData.password);
  localStorage.setItem("remember", loginData.checkbox);

  // api post call for login

  return redirect("/blogs");
}
