import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRote.jsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { useAppDispatch } from "./redux/redux_ts/hook.js";
import { getCurrentUserThunk } from "./redux/auth/auth.operations.js";
import {
  selectIsAuthorized,
  selectRefresh,
} from "./redux/auth/authSelectors.js";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout.js";
import Loading from "./components/Loading/Loading.js";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.js";
import ResetPasswordPage from "./pages/ResetPasswordPage.js";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.js"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage.js"));
const VerificationPage = lazy(
  () => import("./pages/VerificationPage/VerificationPage.js")
);

export default function App() {
  const isAuthorized = useSelector(selectIsAuthorized);
  const isRefresh = useSelector(selectRefresh);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loading />
  ) : (
    <>
      <Routes>
        <Route path="/verify/:token" element={<VerificationPage />} />
        <Route path="/" element={<Layout />}>
          {/* Public Routers  */}
          <Route
            index
            element={!isAuthorized ? <WelcomePage /> : <HomePage />}
          />
          <Route
            path="/welcome"
            element={
              <PublicRoute redirectTo="/home" component={<WelcomePage />} />
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute redirectTo="/home" component={<RegisterPage />} />
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:id" element={<ResetPasswordPage />} />
          {/* Private Routers */}
          <Route
            path="/home"
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}
