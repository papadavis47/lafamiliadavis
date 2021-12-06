import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import * as styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <p>
        &copy; {new Date().getFullYear()}&nbsp;
        <a href='https://github.com/papadavis47/lafamiliadavis' target='_blank' rel='noreferrer'>
          <span>LaFamiliaDavis</span>&nbsp;{" "}
          <span>
            <VscGithubInverted />
          </span>
        </a>
        &nbsp; - Built with <span>&hearts;</span> and
        <a href='https://gatsbyjs.com' target='_blank' rel='noreferrer'>
          {" "}
          Gatsby
        </a>
      </p>
    </footer>
  );
};

export default Footer;
