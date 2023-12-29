import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../../components/UI/LoginForm";
import { AuthContext } from "../../store/auth-context";
import { login } from "../../util/auth";

function LoginPage() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ empid, password }) {
    try {
      setIsAuthenticating(true);
      const response = await login({
        empid,
        password,
      });
      const token = response.token;
      const responseEmpId = response.responseEmpId;
      const username = response.username;
      const responseEmail = response.repsonseEmail;
      const responsePassword = response.responsePassword;
      authCtx.authenticate(
        token,
        responseEmpId,
        username,
        responseEmail,
        responsePassword
      );
      setIsAuthenticating(false);
    } catch (err) {
      setIsAuthenticating(false);
    }
  }
  console.log(authCtx.empId);
  const navigate = useNavigate();

  function routeHandle(e) {
    e.preventDefault();
    navigate("/blogs");
  }

  return (
    <>
      <LoginForm routeHandle={routeHandle} onAuthenticate={loginHandler} />
    </>
  );
}

export default LoginPage;
