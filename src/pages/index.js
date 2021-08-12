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
            <p>This is our family's website 👪 where we share some of our story and experiences.</p>
            <p>
              We love eachother very much and this website is evolving in celebration of that love
              💖
            </p>
            <p>
              We are proud of the fact that we are a bicultural and bilingual family. Inma is from
              Nicaragua and John was born and raised in the United States. The children: Diego,
              Santiago and Linda, are a combination of those two cultures and world views 🇳🇮 🇺🇸
            </p>

            <p>
              Years before the kids were born, John and Inma decided that they would raise their
              "future" children - to appreciate the culture and history of both countries. They have
              done just that 🦚
            </p>
            <p>
              We enjoy restaurants, road trips, camping, movies, books, Netflix and spending time
              with eachtother.
            </p>
            <p>John is a software developer and Inma is an eductor.</p>

            <p>
              The kids love their various digital devices 😨 Their parents have to keep vigilant
              eyes on making sure they get exercise and go outside regularly to experience sun,
              fresh air and nature. We are very much the modern family in that way.
            </p>
          </div>
          <div>
            <StaticImage
              src='../images/our-family.jpg'
              alt='Two handsome twin boys'
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

export default IndexPage;
