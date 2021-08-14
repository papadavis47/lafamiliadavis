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
            <p>
              She enjoys watching anime, reading anime and playing with her iPad. She is interested
              in Japanes culture and Japanese food.
            </p>
            <p>
              Ever since she was a baby she has been an adventurous eater. She will try any type of
              food from anywhere in the world, and she likes most foods.
            </p>
            <p>She loves animated movies of all kinds and she loves dogs.</p>
            <p>Linda is her father's pride and joy 🤩 💯</p>
            <p>
              She loves and admires her grandmother and her Mom. She has always been sweet and
              kindhearted. She is a good sister to her brothers.
            </p>
            <p>She is the very creative 🎨 princess of the Davis Family 💯 </p>
            <p>Her first and middle names together mean "Pretty Star ⭐"</p>
            <p>And she is one 🙂</p>
            <br />
            <br />
            <StaticImage
              src='../images/tokyo.jpg'
              alt='Tokyo Skyline at Night'
              width={600}
              placeholder='blurred'
            />
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
