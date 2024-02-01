import { NavLink } from "react-router-dom";
import Icon from "../../Icon/Icon";
import { useSelector } from "react-redux";
import { selectIsAuthorized } from "../../../redux/auth/authSelectors";
import { LogoContainer } from "./Logo.Styled";

const Logo = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <>
      {isAuthorized ? (
        <>
          <NavLink to="/home">
            <LogoContainer>
              <Icon className="icon" id="logo" />
              <span className="logo-text">TRACKER OF WATER</span>
            </LogoContainer>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/welcome">
            <LogoContainer>
              <Icon className="icon" id="logo" />

              <span className="logo-text">Tracker of water</span>
            </LogoContainer>
          </NavLink>
        </>
      )}
    </>
  );
};

export default Logo;
