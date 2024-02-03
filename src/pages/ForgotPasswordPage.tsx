import { NavLink } from "react-router-dom";

import ForgotPasswordForm from "../components/ForgotPasswordForm/ForgotPasswordForm";
import {
  StyledForgotPassDiv,
  StyledForgotPassSection,
} from "../components/ForgotPasswordForm/ForgoPasswordForm.styled";

const ForgotPasswordPage = () => {
  return (
    <StyledForgotPassSection>
      <div className="container">
        <StyledForgotPassDiv>
          <h2 className="title">Forgot password</h2>
          <ForgotPasswordForm />

          <NavLink className="auth-link" to="/resetpass">
            Reset your password
          </NavLink>
        </StyledForgotPassDiv>
      </div>
    </StyledForgotPassSection>
  );
};

export default ForgotPasswordPage;
