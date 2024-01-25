
import Logo from "./Logo/Logo";
import UserAuth from "./UserAuth/UserAuth";
import UserLogo from "./UserLogo/UserLogo";
import {NavbarContainer} from "../Styles/Header.style.js"

const Header = () => {
  // const isSignedIn = useSelector(selectAuthIsSignedIn);
  // const { pathname } = useLocation();
  return <NavbarContainer>
    
    <Logo />
    
    <p>if isSignedIn then</p>
    <UserLogo />
    <p>else</p>
    <UserAuth />
    
  </NavbarContainer>;
};

export default Header;
