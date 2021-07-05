import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

// markup
const AbuelitosPage = () => {
  return (
    <Layout pageTitle="Abuelitos' Page">
      <Intro
        name='🖌️ Victor Fuentes 🖌️ and 🎨 Inmaculada Cruz'
        emoji='🎨'
        label='Artist pallete emoji'
      />
    </Layout>
  );
};

export default AbuelitosPage;
