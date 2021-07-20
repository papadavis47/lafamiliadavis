import React from "react";
import * as introStyles from "./intro.module.css";

const Intro = ({ name, emoji, label }) => {
  return (
    <div className={introStyles.container}>
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
