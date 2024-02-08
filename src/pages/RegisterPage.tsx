import { NavLink } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import {
  AuthFormLink,
  StyledLoginDiv,
  StyledRegisterSection,
} from "../components/AuthForm/AuthForm.styled";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <StyledRegisterSection>
      <div className="container">
        <StyledLoginDiv>
          <h2 className="title">{t("signin.signup")}</h2>
          <AuthForm repeat={true} />
          <AuthFormLink
            className="btn btn-google"
            href="https://agua-vivo-app-backend.onrender.com/google/google"
          >
            Google
          </AuthFormLink>
          <NavLink className="auth-link" to="/signin">
            {t("signin.title")}
          </NavLink>
        </StyledLoginDiv>
      </div>
    </StyledRegisterSection>
  );
};

export default RegisterPage;
