import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <span className={styles.span} role='img' aria-label='heart'>
          ❤️
        </span>
        <Link to='/' className={styles.titleLink}>
          <h1 className={styles.siteTitle}>La Familia Davis</h1>
        </Link>
        <span className={styles.span} role='img' aria-label='heart'>
          ❤️
        </span>
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
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
