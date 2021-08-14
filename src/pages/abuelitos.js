import * as React from "react";
import { Link } from "gatsby";
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
              Victor Fuentes 🇳🇮 and Inmaculada Cruz de Fuentes 🇳🇮 have helped raise the Davis
              Children from the first minutes they were born 🌄
            </p>
            <p>They are classy and amazing grandparents and in-laws 🥇</p>
            <p>The Davis Kids would not be who they are today without these two grandparents 💯</p>
            <p>The are both talented and accomplished painters.</p>{" "}
            <p>
              Each of them have more than forty years of experience in the art world. First in
              Nicaragua, then Southern California and for the past several years in Washington Sate.
            </p>
            <p>
              Inmaculada immigrated to the United States in the mid 1990s and Victor came to the USA
              in 1999.
            </p>
            <p>
              For the majority of that time, their <Link to='/inma'>daughter</Link> has been married
              to a "gringo" - a North American - and they have always impressed their son-in-law
              with their Nicaraguan sensibilies regarding family love and devotion.
            </p>
            <p>They are both caring and loving parents and grandparents.</p>
          </div>
          <div>
            <StaticImage
              src='../images/abuelitos.jpg'
              alt='Some beautiful grandparents'
              width={700}
              placeholder='tracedSVG'
              imgClassName={styles.pic}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AbuelitosPage;
