import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import * as styles from "./main.module.css";

// markup
const SantiagoPage = () => {
  return (
    <Layout>
      <Seo title='Santiago' />
      <Intro name='El Hijo Bonito' emoji='🚴‍♂️' label='Kid on a Bike Emoji' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>Santiago is a beautiful boy 🥇</p>
            <p>He is great on a bike 💯</p>
            <p>He loves his family 😀</p>
          </div>
          <div>
            <StaticImage
              src='../images/santi-nica.jpg'
              alt='My beautiful boy, Santiago'
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

export default SantiagoPage;
