import * as React from "react";
import Layout from "../components/layout";
import "../css/mystyles.scss";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Our Home Page'>
      <h1 className='title'>
        The Official Website of The Davis Family{" "}
        <span role='img' aria-label='Emoji with Heart Eyes'>
          😍
        </span>
      </h1>
    </Layout>
  );
};

export default IndexPage;
