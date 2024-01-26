
import AuthForm from "../components/AuthForm/AuthForm";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <AuthForm />
      <NavLink to="/signup">Sign up</NavLink>
    </div>
  );

};

export default LoginPage;
