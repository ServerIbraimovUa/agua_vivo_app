import { Navigate, useSearchParams } from "react-router-dom";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { setVerify } from "../../redux/auth/authSlice";

interface Props {
  redirectTo: string;
}

export const AuthGoogle: FC<Props> = ({ redirectTo = "/" }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  dispatch(setVerify(token));

  return <Navigate to={redirectTo} />;
};
