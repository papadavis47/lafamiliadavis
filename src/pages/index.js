import * as React from "react";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Our Home Page'>
      <h1>
        The Davis Family{" "}
        <span role='img' aria-label='Emoji with Heart Eyes'>
          😍
        </span>
      </h1>
    </Layout>
  );
};

export default IndexPage;
