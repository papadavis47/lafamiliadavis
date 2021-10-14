import React, { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import * as styles from "./header.module.css";
import Navigation from "./Navigation.js";
import TitleLogo from "./TitleLogo.js";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <TitleLogo />
      <Navigation menuOpen={open} />
      <div className={styles.menu}>
        <VscMenu size={36} onClick={() => setOpen(!open)} />
      </div>
    </header>
  );
};

export default Header;
