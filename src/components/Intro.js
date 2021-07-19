import React from "react";
import * as introStyles from "./intro.module.css";

const Intro = ({ name, emoji, label }) => {
  // The following two lines are for Dan Abramov's course
  console.log(typeof name);
  console.log(typeof emoji);
  console.log(typeof Intro);
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
