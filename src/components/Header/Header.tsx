import Logo from "./Logo/Logo";

import UserAuth from "./UserAuth/UserAuth";
import UserLogo from "./UserLogo/UserLogo";
import { NavbarContainer, HeaderStyle } from "./Header.style.js";
import { useSelector } from "react-redux";
import { selectIsAuthorized } from "../../redux/auth/authSelectors.js";

const Header = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <HeaderStyle>
      <div className="container header-container">
        <NavbarContainer>
          <Logo />

          {isAuthorized ? <UserLogo /> : <UserAuth />}
        </NavbarContainer>
      </div>
    </HeaderStyle>
  );
};

export default Header;
