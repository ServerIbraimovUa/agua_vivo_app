import { NavLink } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import {
  AuthFormLink,
  StyledLoginDiv,
  StyledRegisterSection,
} from "../components/AuthForm/AuthForm.styled";

const RegisterPage = () => {
  return (
    <StyledRegisterSection>
      <div className="container">
        <StyledLoginDiv>
          <h2 className="title">Sign Up</h2>
          <AuthForm repeat={true} />
          <AuthFormLink
            className="btn"
            href="https://agua-vivo-app-backend.onrender.com/google/google"
          >
            Google
          </AuthFormLink>
          <NavLink className="auth-link" to="/signin">
            Sign in
          </NavLink>
        </StyledLoginDiv>
      </div>
    </StyledRegisterSection>
  );
};

export default RegisterPage;
