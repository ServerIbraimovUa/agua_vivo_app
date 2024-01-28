import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRote.jsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { useAppDispatch } from "./redux/redux_ts/hook.js";
import { getCurrentUserThunk } from "./redux/auth/auth.operations.js";

const Layout = lazy(() => import("./components/Layout/Layout.js"));
const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage.js"));

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUserThunk("r"));
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routers  */}
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
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
