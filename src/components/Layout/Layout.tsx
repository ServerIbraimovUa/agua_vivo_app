import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import { Suspense } from "react";
import Loading from "../Loading/Loading";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <header>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
        <NavLink to="/signin">Sign in</NavLink>
      </header> */}
      <main>
        {
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        }
      </main>
    </>
  );
};

export default Layout;
