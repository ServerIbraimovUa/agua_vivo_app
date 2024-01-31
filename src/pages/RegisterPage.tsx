import { NavLink } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import { StyledLoginDiv } from "../components/AuthForm/AuthForm.styled";

const RegisterPage = () => {
  return (
    <section>
      <div className="container">
        <StyledLoginDiv>
          <h2 className="title">Sign Up</h2>
          <AuthForm repeat={true} />
          <NavLink className="auth-link" to="/signin">
            Sign in
          </NavLink>
        </StyledLoginDiv>
      </div>
    </section>
  );
};

export default RegisterPage;
