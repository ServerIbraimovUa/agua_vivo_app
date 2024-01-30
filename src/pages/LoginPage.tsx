import AuthForm from "../components/AuthForm/AuthForm";
import { NavLink } from "react-router-dom";
import { AuthFormButton } from "../components/AuthForm/AuthForm.styled";

const LoginPage = () => {
  return (
    <section>
      <div className="container">
        <h2>Sign In</h2>
        <AuthForm repeat={false} />
        <AuthFormButton className="btn">Google</AuthFormButton>
        <NavLink to="/signup">Sign up</NavLink>
        <NavLink to="/forgotPass">Forgot your password?</NavLink>
      </div>
    </section>
  );
};

export default LoginPage;
