import { useEffect } from "react";
import SignupForm from "../../components/UI/SignupForm";

function SignupPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SignupForm />;
}
export default SignupPage;
