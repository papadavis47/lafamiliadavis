import React from "react";
import * as pageTitleStyles from "./PageTitles.js";

const PageTitles = ({ pageTitle }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <h1 className={pageTitleStyles.name}>{pageTitle}</h1>
    </div>
  );
};

export default PageTitles;
