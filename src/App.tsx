import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRote.jsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { useAppDispatch } from "./redux/redux_ts/hook.js";
import { getCurrentUserThunk } from "./redux/auth/auth.operations.js";
import { selectIsAuthorized } from "./redux/auth/authSelectors.js";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout.js";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage.js"));

export default function App() {
  const isAuthorized = useSelector(selectIsAuthorized);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
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
