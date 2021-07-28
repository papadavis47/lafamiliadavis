import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import * as styles from "./main.module.css";

// markup
const LindaPage = () => {
  return (
    <Layout>
      <Seo title='Linda' />
      <Intro name='La Princessa' emoji='👸🏽' label='Princess Emoji' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>Linda is an incredible daughter 🤩</p>
            <p>Her first and middle names together mean "Pretty ⭐"</p>
            <p>And she is 🙂</p>
          </div>
          <div>
            <StaticImage
              src='../images/linda-nica.jpg'
              alt='Beautiful little girl with bird'
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

export default LindaPage;
