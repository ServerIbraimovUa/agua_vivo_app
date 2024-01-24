// import { Navigate } from "react-router-dom";

import { FC, ReactElement } from "react";
interface Props {
  component: ReactElement;
  redirectTo: string;
}

export const PrivateRoute: FC<Props> = ({
  component: Component,
  redirectTo = "/",
}) => {
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log(redirectTo);
  // return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  return Component;
};
