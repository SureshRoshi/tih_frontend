import { useNavigate } from "react-router-dom";

import SignupForm from "../../components/UI/SignupForm";

function SignupPage() {
  const navigate = useNavigate();

  function signupHandler(e) {
    e.preventDefault();
    navigate("/blogs");
  }

  return (
    <>
      <SignupForm signupHandler={signupHandler} />
    </>
  );
}
export default SignupPage;
