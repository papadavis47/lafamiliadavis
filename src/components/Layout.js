import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageTitles from "./PageTitles";
import "normalize.css";
import "./global.css";
// import * as layoutStyles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <PageTitles pageTitle={pageTitle} /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
