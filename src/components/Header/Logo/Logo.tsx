import { NavLink } from "react-router-dom";
import logo from "../../../img/Logo.svg";
import { useSelector } from "react-redux";
import { selectIsAuthorized } from "../../../redux/auth/authSelectors";

const Logo = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <div>
      {isAuthorized ? (
        <>
          <NavLink to="/home">
            <img src={logo} alt="logo" width="102px" height="48px" />
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/welcome">
            <img src={logo} alt="logo" width="102px" height="48px" />
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Logo;
