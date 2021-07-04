import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Our Home Page'>
      <Intro name='The Davis Family' emoji='😍' label='Emoji with Heart Eyes' />
    </Layout>
  );
};

export default IndexPage;
