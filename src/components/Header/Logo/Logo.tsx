// import { UseSelector } from "react-redux";
// import { selectAuthIsSignedIn } from 'redux/auth.selectors';
import { NavLink } from "react-router-dom";
import logo from '../../../img/Logo.svg';

const Logo = () => {
  // const isSignedIn = useSelector(selectAuthIsSignedIn);
  return (
   <div>
      {/* {isSignedIn ? (
        <>
         <a href="/">LOGO</a>
        </>
      ) : (
        <>
         <a href="/welcome">LOGO</a>
        </>
      )} */}
      
      <NavLink to="/home"><img src={logo} alt="logo" width="102px" height="48px" />Home</NavLink>
      <NavLink to="/welcome"><img src={logo} alt="logo" width="102px" height="48px" />Welcome</NavLink>
    </div>
  );
}

export default Logo;
