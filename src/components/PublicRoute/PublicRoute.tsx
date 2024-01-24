import { Navigate } from "react-router-dom";

export const PublicRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = false;
  // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  return Component;
};
