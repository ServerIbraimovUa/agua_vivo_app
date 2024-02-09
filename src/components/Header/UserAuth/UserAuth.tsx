import { NavLink } from "react-router-dom";

import signInLogo from "../../../img/Sign_in_def_logo.svg";
import { UserWrapper } from "./UserAuth.styled";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../Language/LanguageSelector";

const UserAuth = () => {
  const { t } = useTranslation();
  return (
    <UserWrapper>
      <NavLink to="/signin" className="text">
        {t("signin.title")}
      </NavLink>
      <img src={signInLogo} alt="default_logo" />
      <LanguageSelector />
    </UserWrapper>
  );
};

export default UserAuth;
