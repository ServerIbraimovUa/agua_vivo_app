import AuthForm from "../components/AuthForm/AuthForm";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <section>
      <div className="container">
        <h2>Sign In</h2>
        <AuthForm repeat={false} />
        <NavLink to="/signup">Sign up</NavLink>
      </div>
    </section>
  );
};

export default LoginPage;
