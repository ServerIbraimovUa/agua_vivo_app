import { NavLink } from "react-router-dom";

import signInLogo from "../../../img/Sign_in_def_logo.svg";
import { UserWrapper } from "./UserAuth.styled";

const UserAuth = () => {
  return (
    <UserWrapper>
      <NavLink to="/signin" className="text">
        Sign in
      </NavLink>
      <img src={signInLogo} alt="default_logo" />
    </UserWrapper>
  );
};

export default UserAuth;
