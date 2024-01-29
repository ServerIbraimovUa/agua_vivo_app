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
              <p className="logotext">Tracker of water</p>
            </LogoContainer>
          </NavLink>
        </>
      ) : (
        <>
            <NavLink to="/welcome">
              <LogoContainer>
              <Icon className="icon" id="logo" />
              
              <p className="logotext">Tracker of water</p>
              </LogoContainer>
           
          </NavLink>
        </>
      )}
    </>
  );
};

export default Logo;
