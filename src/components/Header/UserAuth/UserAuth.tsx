import { NavLink } from "react-router-dom";
import signInLogo from "../../../img/Sign_in_def_logo.svg"


const UserAuth = () => {
  return (
    <div>
      <NavLink to="/signin">Sign in <img src={signInLogo} alt="default_logo" width="28" height="28" /></NavLink>
    </div>
  );
}

export default UserAuth;
