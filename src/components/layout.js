import * as React from "react";
import Header from "./header";
import * as layoutStyles from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <div>
        <title>{pageTitle}</title>
        <h1 className={layoutStyles.name}>{pageTitle}</h1>
      </div>
      <main className={layoutStyles.content}>{children}</main>
    </>
  );
};

export default Layout;
