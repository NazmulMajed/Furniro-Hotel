import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
