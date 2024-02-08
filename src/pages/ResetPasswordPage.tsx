import ResetPasswordForm from "../components/ResetPasswordForm/ResetPasswordForm";
import {
  StyledResetPassDiv,
  StyledResetPassSection,
} from "../components/ResetPasswordForm/ResetPasswordForm.styled";

const ResetPasswordPage = () => {
  return (
    <StyledResetPassSection>
      <div className="container">
        <StyledResetPassDiv>
          <h2 className="title">Reset password</h2>
          <ResetPasswordForm />
        </StyledResetPassDiv>
      </div>
    </StyledResetPassSection>
  );
};
export default ResetPasswordPage;
