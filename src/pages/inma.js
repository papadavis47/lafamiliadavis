import * as React from "react";
import { wife } from "../css/inma.module.css";
import Layout from "../components/layout";

// markup
const InmaPage = () => {
  return (
    <Layout pageTitle="Inma's page">
      <div className={wife}>
        <h1>
          The Mom
          <span role='img' aria-label='Emoji of a Woman Dancing'>
            💃🏾
          </span>
        </h1>
      </div>
    </Layout>
  );
};

export default InmaPage;
