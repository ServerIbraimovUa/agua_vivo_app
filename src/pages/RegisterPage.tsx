import { NavLink } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";

const RegisterPage = () => {
  return (
    <section>
      <div className="container">
        <h2>Sign Up</h2>
        <AuthForm repeat={true} />
        <NavLink to="/signin">Sign in</NavLink>
      </div>
    </section>
  );
};

export default RegisterPage;
