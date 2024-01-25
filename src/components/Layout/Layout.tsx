import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import { Suspense } from "react";
import Loading from "../Loading/Loading";

const Layout = () => {
  return (
    <>
      <Header />
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
