import * as React from "react";
import Header from "./Header";
import PageTitles from "./PageTitles";
import "normalize.css";
import "./global.css";
// import * as layoutStyles from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <PageTitles pageTitle={pageTitle} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
