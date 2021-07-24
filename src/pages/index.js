import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import * as styles from "./main.module.css";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title='Home' />
      <Intro name='Our Family' emoji='😍' label='Emoji with Heart Eyes' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>This is our family website 👪</p>
            <p>We love eachother 💖</p>
            <p>Much more content to come in the coming weeks 😃</p>
          </div>
          <div>
            <StaticImage
              src='../images/our-family.jpg'
              alt='Two handsome twin boys'
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

export default IndexPage;
