import * as React from "react";
import Layout from "../components/Layout";

// markup
const InmaPage = () => {
  return (
    <Layout pageTitle="Inma's page">
      <div>
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
