import React, { useState } from "react";
import { Link } from "gatsby";
import { VscMenu, VscClose } from "react-icons/vsc";
import * as styles from "./header.module.css";
import Navigation from "./Navigation.js";
import TitleLogo from "./TitleLogo.js";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.header}>
      <TitleLogo />
      <Navigation />
    </header>
  );
};

export default Header;
