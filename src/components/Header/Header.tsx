
import Logo from "./Logo/Logo";
import UserAuth from "./UserAuth/UserAuth";
import UserLogo from "./UserLogo/UserLogo";
import UserLogoModal from "./UserLogoModal/UserLogoModal";

const Header = () => {
  // const isSignedIn = useSelector(selectAuthIsSignedIn);
  // const { pathname } = useLocation();
  return <div>
    <Logo/>
    <UserAuth />
    <UserLogo />
    <UserLogoModal/>
  </div>;
};

export default Header;
