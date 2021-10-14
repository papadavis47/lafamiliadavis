import React, { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import * as styles from "./header.module.css";
import Navigation from "./Navigation.js";
import TitleLogo from "./TitleLogo.js";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <TitleLogo menuOpen={open} />
      <Navigation menuOpen={open} />
      <div className={styles.menu}>
        {!open ? <VscMenu size={36} onClick={() => setOpen(!open)} /> : null}
      </div>
    </header>
  );
};

export default Header;
