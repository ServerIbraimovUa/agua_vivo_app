import { NavLink } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";

const RegisterPage = () => {
  return (
    <div>
      <div>
        <h2>Sign In</h2>
        <AuthForm />
        <NavLink to="/signin">Sign in</NavLink>
      </div>
    </div>
  );
};

export default RegisterPage;
