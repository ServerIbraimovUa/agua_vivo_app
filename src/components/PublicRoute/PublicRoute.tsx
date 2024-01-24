// import { Navigate } from "react-router-dom";
import { FC, ReactElement } from "react";
interface Props {
  component: ReactElement;
  redirectTo: string;
}

export const PublicRoute: FC<Props> = ({
  component: Component,
  redirectTo = "/",
}) => {
  console.log(redirectTo);
  // const isLoggedIn = true;
  // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  return Component;
};
