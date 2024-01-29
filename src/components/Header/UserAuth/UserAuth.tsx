import { NavLink } from "react-router-dom";

import signInLogo from "../../../img/Sign_in_def_logo.svg"
import { UserWrapper } from "./UserAuth.styled";


const UserAuth = () => {
  return (
    <div>
      <NavLink to="/signin">
        <UserWrapper>
          <p className="singintext">Sign in</p>
        <img src={signInLogo} alt="default_logo" style={{ width: "28px", height: "28px" }} />
        </UserWrapper>
        
      </NavLink>
    </div>
  );
}

export default UserAuth;
