import React from "react";
import * as styles from "./intro.module.css";

const Intro = ({ name, emoji, label }) => {
  return (
    <div className={styles.container}>
      <h1>
        {name}&nbsp;
        <span role='img' aria-label={label}>
          {emoji}
        </span>
      </h1>
    </div>
  );
};

export default Intro;
