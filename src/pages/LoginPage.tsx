import AuthForm from "../components/AuthForm/AuthForm";
import { NavLink } from "react-router-dom";
import {
  AuthFormButton,
  StyledLoginDiv,
} from "../components/AuthForm/AuthForm.styled";

const LoginPage = () => {
  return (
    <section>
      <div className="container">
        <StyledLoginDiv>
          <h2 className="title">Sign In</h2>
          <AuthForm repeat={false} />
          <AuthFormButton className="btn">Google</AuthFormButton>
          <NavLink className="auth-link" to="/signup">
            Sign up
          </NavLink>
          <NavLink className="auth-link" to="/forgotPass">
            Forgot your password?
          </NavLink>
        </StyledLoginDiv>
      </div>
    </section>
  );
};

export default LoginPage;
