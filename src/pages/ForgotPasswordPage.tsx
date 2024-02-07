import ForgotPasswordForm from "../components/ForgotPasswordForm/ForgotPasswordForm";
import {
  StyledForgotPassDiv,
  StyledForgotPassSection,
} from "../components/ForgotPasswordForm/ForgoPasswordForm.styled";
import { useTranslation } from "react-i18next";

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  return (
    <StyledForgotPassSection>
      <div className="container">
        <StyledForgotPassDiv>
          <h2 className="title">{t("forgot.title")}</h2>
          <ForgotPasswordForm />
        </StyledForgotPassDiv>
      </div>
    </StyledForgotPassSection>
  );
};

export default ForgotPasswordPage;
