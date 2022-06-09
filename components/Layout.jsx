import React from "react";
import NavBar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
