import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

// markup
const InmaPage = () => {
  return (
    <Layout pageTitle="Inma's Page">
      <Intro name='The Dancing Mom' emoji='💃🏽' label='A woman dancing' />
    </Layout>
  );
};

export default InmaPage;
