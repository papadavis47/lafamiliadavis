import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "normalize.css";
import "./global.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
