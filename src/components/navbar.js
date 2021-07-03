import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <span className={styles.span} role='img' aria-label='heart'>
          ❤️
        </span>
        <h1 className={styles.siteTitle}>La Familia Davis</h1>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/john'>
              John
            </Link>{" "}
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/inma'>
              Inma
            </Link>{" "}
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/john'>
              Diego
            </Link>{" "}
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/john'>
              Santiago
            </Link>{" "}
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/john'>
              Linda
            </Link>{" "}
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/'>
              <p className={styles.specialLink}>Abuelitos</p>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/'>
              <p className={styles.specialLink}>Home</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
