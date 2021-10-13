import React from "react";
import { Link } from "gatsby";
import * as styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link
            className={styles.link}
            to='/john'
            activeClassName='active-link'
          >
            John
          </Link>{" "}
        </li>
        <li className={styles.navListItem}>
          <Link
            className={styles.link}
            to='/inma'
            activeClassName='active-link'
          >
            Inma
          </Link>{" "}
        </li>
        <li className={styles.navListItem}>
          <Link
            className={styles.link}
            to='/diego'
            activeClassName='active-link'
          >
            Diego
          </Link>{" "}
        </li>
        <li className={styles.navListItem}>
          <Link
            className={styles.link}
            to='/santiago'
            activeClassName='active-link'
          >
            Santiago
          </Link>{" "}
        </li>
        <li className={styles.navListItem}>
          <Link
            className={styles.link}
            to='/linda'
            activeClassName='active-link'
          >
            Linda
          </Link>{" "}
        </li>
        <li className={styles.navListItem}>
          <Link
            className={styles.link}
            to='/abuelitos'
            activeClassName='active-link'
          >
            <p className={styles.specialLink}>Abuelitos</p>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.link} to='/' activeClassName='home-link'>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
