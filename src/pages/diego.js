import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import * as styles from "./main.module.css";

// markup
const DiegoPage = () => {
  return (
    <Layout>
      <Seo title='Diego' />
      <Intro name='El Niño Guapito' emoji='🦬' label='Buffalo Emoji' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>Diego is a very cool kid 😎 He loves gaming and spending time with his family.</p>
            <p>He is good at many different things.</p>
            <p>And he is a very kind hearted boy 🤹‍♂️</p>
          </div>
          <div>
            <StaticImage
              src='../images/diego-nica.jpg'
              alt='My beautiful boy, Diego'
              width={700}
              imgClassName={styles.pic}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default DiegoPage;
