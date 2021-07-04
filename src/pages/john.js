import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

// markup
const JohnPage = () => {
  return (
    <Layout pageTitle="John's Page">
      <Intro name='The Cool Dad' emoji='🎽' labe='Runner Shirt' />
    </Layout>
  );
};

export default JohnPage;
