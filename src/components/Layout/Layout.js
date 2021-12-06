import * as React from "react";
import Header from "../Header";
import Footer from "../Footer";
import * as styles from "./layout.module.css";
import "normalize.css";
import "../global.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
