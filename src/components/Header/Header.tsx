import Logo from "./Logo/Logo";

import UserAuth from "./UserAuth/UserAuth";
import UserLogo from "./UserLogo/UserLogo";
import { NavbarContainer } from "./Header.style.js";
import { useSelector } from "react-redux";
import { selectIsAuthorized } from "../../redux/auth/authSelectors.js";

const Header = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <NavbarContainer>
      <Logo />

      {isAuthorized ? <UserLogo /> : <UserAuth />}
    </NavbarContainer>
  );
};

export default Header;
