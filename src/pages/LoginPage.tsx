import AuthForm from "../components/AuthForm/AuthForm";
import { NavLink } from "react-router-dom";
import {
  AuthFormLink,
  StyledLoginDiv,
  StyledLoginSection,
} from "../components/AuthForm/AuthForm.styled";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <StyledLoginSection>
      <div className="container">
        <StyledLoginDiv>
          <h2 className="title">{t("signin.title")}</h2>
          <AuthForm repeat={false} />
          <AuthFormLink
            className="btn btn-google"
            href="https://agua-vivo-app-backend.onrender.com/google/google"
          >
            Google
          </AuthFormLink>
          <NavLink className="auth-link" to="/signup">
            {t("signin.signup")}
          </NavLink>
          <NavLink className="auth-link" to="/forgot-password">
            {t("signin.forgot")}
          </NavLink>
        </StyledLoginDiv>
      </div>
    </StyledLoginSection>
  );
};

export default LoginPage;
