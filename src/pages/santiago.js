import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

// markup
const SantiagoPage = () => {
  return (
    <Layout pageTitle="Santiago's Page">
      <Intro name='El Hijo Bonito' emoji='🚴‍♂️' label='Kid on a Bike Emoji' />
    </Layout>
  );
};

export default SantiagoPage;
