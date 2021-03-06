import * as React from "react";
import { Link } from "gatsby";
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
      <Intro name='La Princessa' emoji='πΈπ½' label='Princess Emoji' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>Linda is an incredible daughter π€©</p>
            <p>
              She enjoys watching anime, reading anime and playing with her iPad. She is interested
              in Japanes culture and Japanese food.
            </p>
            <p>
              Ever since she was a baby she has been an adventurous eater. She will try any type of
              food from anywhere in the world, and she likes most foods.
            </p>
            <p>She loves animated movies of all kinds and she loves dogs.</p>
            <p>
              Linda is the pride and joy of her <Link to='/john'>father</Link> π€© π―
            </p>
            <p>
              She loves and admires her <Link to='/abuelitos'>grandmother</Link> and her{" "}
              <Link to='/inma'>Mom.</Link>
            </p>
            <p>Since she was a baby, Linda has been kindhearted.</p>
            <p>She is the very creative π¨ princess of the Davis Family π― </p>
            <p>Her first and middle names together mean "Pretty Star β­"</p>
            <p>And she is one π</p>
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
