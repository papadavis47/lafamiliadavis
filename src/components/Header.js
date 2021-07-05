import React, { useState } from "react";
import { Link } from "gatsby";
import { GrMenu } from "react-icons/gr";
import * as styles from "./header.module.css";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.header}>
      <div>
        <Link to='/' className={styles.titleLink}>
          <h1 className={styles.siteTitle}>
            {" "}
            <span className={styles.span} role='img' aria-label='heart'>
              ❤️
            </span>
            La Familia Davis{" "}
            <span className={styles.span} role='img' aria-label='heart'>
              ❤️
            </span>
          </h1>
        </Link>
      </div>
      <button onClick={() => setShow(!show)}>
        Menu <GrMenu />
      </button>
      <nav className={show ? `${styles.navbar}` : `${styles.navbar} ${styles.hidden}`}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/john' activeClassName='active-link'>
              John
            </Link>{" "}
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/inma' activeClassName='active-link'>
              Inma
            </Link>{" "}
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/diego' activeClassName='active-link'>
              Diego
            </Link>{" "}
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/santiago' activeClassName='active-link'>
              Santiago
            </Link>{" "}
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/linda' activeClassName='active-link'>
              Linda
            </Link>{" "}
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.link} to='/abuelitos' activeClassName='active-link'>
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
    </header>
  );
};

export default Header;
