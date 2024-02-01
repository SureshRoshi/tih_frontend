import React from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { isEmail, isEqualsToOtherValue, isPassword } from "../util/validation";
import config from "../util/config";

function SignupForm() {
  const data = useActionData();
  const { state } = useNavigation();

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
                  {data && data.message && (
                    <div className="alert alert-danger border-radius-10">
                      {data.message}
                    </div>
                  )}
                  <Form method="POST">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        required
                      />
                    </div>
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
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
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
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="confirm-password"
                        placeholder="Confirm password"
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
                        {state === "submitting"
                          ? "Registering User..."
                          : "Submit & Register"}
                      </button>
                    </div>
                  </Form>
                  <div className="divider-text-center mt-15 mb-15">
                    <span> or</span>
                  </div>
                  <div className="text-muted text-center">
                    Already have an account?{" "}
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

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const formUsername = data.get("username");
  const formPassword = data.get("password");
  const formEmpId = data.get("employeeId");
  const formEmail = data.get("email");
  const formRepeatPassword = data.get("confirm-password");
  const formCheckbox = data.get("checkbox");

  let message = null;

  if (
    formCheckbox &&
    isEmail(formEmail) &&
    isPassword(formPassword) &&
    isEqualsToOtherValue(formPassword, formRepeatPassword)
  ) {
    const signupData = {
      username: formUsername,
      employee_id: formEmpId,
      email: formEmail,
      password: formPassword,
    };

    const url = `http://${config.backend_url}/accounts/register/`;

    try {
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(signupData),
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
      console.log(resData);

      return redirect("/login");
    } catch (err) {
      message = "Error connecting to the server. Please try again later.";
    }
  } else {
    message = "Invalid form data. Please check your inputs.";
  }
  return { message };
}
