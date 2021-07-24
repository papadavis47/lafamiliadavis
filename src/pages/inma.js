import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import * as styles from "./main.module.css";

// markup
const InmaPage = () => {
  return (
    <Layout>
      <Seo title='Inma' />
      <Intro name='The Beautiful Mom' emoji='💃🏽' label='A woman dancing' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>Inma is a fantastic wife and a wonderful person</p>
            <p>She is originally from Nicaragua 🇳🇮 and now makes her home in Washington State 🇺🇸</p>
            <p>She is a wonderful cook and she loves to dance!</p>
          </div>
          <div>
            <StaticImage
              src='../images/inma.jpg'
              alt='Beautiful Mom on a Happy Day'
              width={700}
              placeholder='blurred'
              imgClassName={styles.pic}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default InmaPage;
