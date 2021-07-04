import * as React from "react";
import Layout from "../components/Layout";

// markup
const JohnPage = () => {
  return (
    <Layout pageTitle="John's Page">
      <h1>
        The Dad
        <span role='img' aria-label='Emoji of a Running Shirt'>
          🎽
        </span>
      </h1>
    </Layout>
  );
};

export default JohnPage;
