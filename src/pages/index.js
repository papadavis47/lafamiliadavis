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
            <p>
              This is our family's website 👪 where we share some of our story and some of our
              experiences as parents ( and as members of a family ) in the 21st Century.
            </p>
            <p>John is a software developer and Inma is an eductor.</p>
            <p>
              We are proud of the fact that we are a bicultural and bilingual family. Inma is from
              Nicaragua and John was born and raised in the United States. The children: Diego,
              Santiago and Linda, are a combination of those two cultures and world views 🇳🇮 🇺🇸
            </p>
            <p>
              Years before the kids were born, John and Inma decided that they would raise their
              "future children" - to appreciate the culture and history of both countries. They have
              done just that 🦚
            </p>
            <p>
              Our family enjoys restaurants, road trips, camping, movies, books, Netflix and
              spending time with eachtother.
            </p>

            <p>
              The kids love their various digital devices 🤔 Their parents have to keep vigilant
              eyes on making sure they get exercise and go outside regularly to experience sun,
              fresh air and nature.
            </p>
            <p>We are very much a modern family in that way.</p>
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
        <section>
          <Intro name='Instagram Stuff' emoji='🖼️' label='Emoji of a picture frame' />
          <div className='picture-container'></div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
