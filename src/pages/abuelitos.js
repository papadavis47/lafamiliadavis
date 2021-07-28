import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import * as styles from "./main.module.css";

// markup
const AbuelitosPage = () => {
  return (
    <Layout>
      <Seo title='Abuelitos' />
      <Intro name='Victor Fuentes and Inmaculada Cruz' emoji='🎨' label='Artist pallete emoji' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>
              Victor 🇳🇮 and Inmaculada 🇳🇮 have helped raise the Davis Children from the first
              minutes they were born 🌄
            </p>
            <p>They are classy and amazing grandparents and inlaws 🥇</p>
            <p>The Davis Kids would not be who they are today without these two grandparents 💯</p>
          </div>
          <div>
            <StaticImage
              src='../images/abuelitos.jpg'
              alt='Some beautiful grandparents'
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

export default AbuelitosPage;
