import React from "react";
import * as pageTitleStyles from "./pageTitles.module.css";

const PageTitles = ({ pageTitle }) => {
  return (
    <div className={pageTitleStyles.content}>
      <title>{pageTitle}</title>
      <h1 className={pageTitleStyles.name}>{pageTitle}</h1>
      <h3>Viva Nicaragua!</h3>
    </div>
  );
};

export default PageTitles;
