import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

// markup
const DiegoPage = () => {
  return (
    <Layout pageTitle="Diego's Page">
      <Intro name='El Niño Guapito' emoji='🦬' label='Buffalo Emoji' />
    </Layout>
  );
};

export default DiegoPage;
