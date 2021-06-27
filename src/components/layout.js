import * as React from "react";
import NavBar from "./navbar";
import "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <NavBar />
      <title>{pageTitle}</title>
      <h1>{pageTitle}</h1>
      <main>{children}</main>
    </>
  );
};

export default Layout;
