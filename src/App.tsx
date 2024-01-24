import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRote.jsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import Loading from "./components/Loading/Loading.js";

const Layout = lazy(() => import("./components/Layout/Layout.js"));
const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage.js"));

const appRoutes = [
  {
    path: "/home",
    element: <PrivateRoute redirectTo="/" component={<HomePage />} />,
  },
  {
    path: "/welcome",
    element: <PublicRoute redirectTo="/" component={<WelcomePage />} />,
  },
  {
    path: "/sign-up",
    element: <PublicRoute redirectTo="/" component={<RegisterPage />} />,
  },
  {
    path: "/sign-in",
    element: <PublicRoute redirectTo="/" component={<LoginPage />} />,
  },
];

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
