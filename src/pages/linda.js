import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

// markup
const LindaPage = () => {
  return (
    <Layout pageTitle="Linda's Page">
      <Intro name='La Princessa' emoji='👸🏽' label='Princess Emoji' />
    </Layout>
  );
};

export default LindaPage;
