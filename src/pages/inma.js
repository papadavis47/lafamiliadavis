import * as React from "react";
import { Link } from "gatsby";
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
            <p>Inma is a wonderful wife and mother ❤️ </p>
            <p>
              She is very intelligent. She is a great cook, a loving mother, and she loves to dance
              ❤️‍🔥
            </p>

            <p>
              Originally from Nicaragua 🇳🇮, she and her family now live in Washington State 🇺🇸 where
              Inma has many friends 💖
            </p>
            <p>
              Both of her <Link to='/abuelitos'>parents</Link> are painters
            </p>
            <p>
              Inma was raised in a house filled with art and artists of various kinds 🎨 She began
              to paint herself as a child.
            </p>
            <p>
              She has volunteered and has been active for several years in Latino and Central
              American community organizations in the Seattle area.
            </p>
            <p>
              She has advocated for members of the Latino community during the COVID 19 pandemic.
            </p>
            <p>
              Inma is also a founding member of{" "}
              <a href='https://www.ometepeartandeducation.org'>Ometepe Art and Education</a> - an
              organization whose mission is to share with the general public the traditional dance,
              musical culture and culinary dishes unique to Nicaragua 🇳🇮
            </p>
            <StaticImage
              src='../images/san-jorge.jpg'
              alt='Volcanoe on Ometepe Island'
              width={500}
              placeholder='blurred'
              imgClassName={styles.pic}
            />
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
