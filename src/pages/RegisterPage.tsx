import { NavLink } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";

const RegisterPage = () => {
  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        <AuthForm repeat={true} />
        <NavLink to="/signin">Sign in</NavLink>
      </div>
    </div>
  );
};

export default RegisterPage;
