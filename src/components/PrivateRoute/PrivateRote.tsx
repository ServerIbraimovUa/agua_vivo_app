import { Navigate } from "react-router-dom";

import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import {
  selectIsAuthorized,
} from "../../redux/auth/authSelectors";
interface Props {
  component: ReactElement;
  redirectTo: string;
}

export const PrivateRoute: FC<Props> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isAuthorized = useSelector(selectIsAuthorized);

  const shouldRedirect = !isAuthorized 
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
