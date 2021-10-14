import React from "react";
import { Link } from "gatsby";
import * as styles from "./title.module.css";

const TitleLogo = ({ menuOpen }) => {
  console.log(menuOpen, "From the title!");
  return (
    <div
      className={!menuOpen ? `${styles.wrapper}` : `${styles.mobileWrapper}`}
    >
      <Link to='/' className={styles.titleLink}>
        <h1 className={styles.siteTitle}>
          <span className={styles.span} role='img' aria-label='heart'>
            ❤️
          </span>
          La Familia Davis
          <span className={styles.span} role='img' aria-label='heart'>
            ❤️
          </span>
        </h1>
      </Link>
    </div>
  );
};

export default TitleLogo;
