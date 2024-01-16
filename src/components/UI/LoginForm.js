import React from "react";
import { Form, Link, redirect, useActionData } from "react-router-dom";
import { isEmpId, isPassword } from "../util/validation";

function LoginForm() {
  const data = useActionData();

  const errorFromServer =
    data &&
    data.data &&
    data.data.field_errors &&
    (data.data.field_errors.password || data.data.field_errors.employee_id);

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
                  {errorFromServer && (
                    <div className="alert alert-danger border-radius-10 text-center">
                      {errorFromServer}
                    </div>
                  )}
                  {!errorFromServer && data && data.message && (
                    <div className="alert alert-danger border-radius-10 text-center">
                      {data.message}
                    </div>
                  )}
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
                      {/* <div className="chek-form">
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
                      </div> */}
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

  const formEmpId = parseInt(data.get("employeeId"));
  const formPassword = data.get("password");

  let message = null;

  if (isEmpId(formEmpId) && isPassword(formPassword)) {
    const loginData = {
      employee_id: formEmpId,
      password: formPassword,
    };

    const ip = "184.73.79.114";
    const url = `http://${ip}:8000/accounts/Login/`;

    try {
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 400) {
        return response;
      }

      if (!response.ok) {
        throw new Error("Could not authenticate user");
      }

      const resData = await response.json();

      localStorage.setItem("token", resData.data.token.access);

      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem("expiration", expiration.toISOString());

      return redirect("/blogs");
    } catch (error) {
      message = "Error connecting to the server. Please try again later.";
    }
  } else {
    message = "Invalid form data. Please check your inputs.";
  }
  return { message };
}
