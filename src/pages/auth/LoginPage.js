import React, { useEffect } from "react";

import LoginForm from "../../components/UI/LoginForm";

function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <LoginForm />;
}

export default LoginPage;
