import React from "react";
import * as styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <p>
        &copy; {new Date().getFullYear()} <span>LaFamiliaDavis</span>&nbsp;- Built with{" "}
        <span>&hearts;</span> and
        <a href='https://gatsbyjs.com'> Gatsby</a>
      </p>
    </footer>
  );
};

export default Footer;
