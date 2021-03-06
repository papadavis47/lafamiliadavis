import * as React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import * as styles from "./main.module.css";

// markup
const IndexPage = ({ data }) => {
  const nodes = data.allFile.nodes;
  return (
    <Layout>
      <Seo title='Home' />
      <Intro name='Our Family' emoji='😍' label='Emoji with Heart Eyes' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>
              This is our family's website 👪 where we share some of our story and some of our
              experiences as parents ( and as sons and daughter ) in the 21st Century.
            </p>
            <p>John is a software developer and Inma is an educator.</p>
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
              spending time with each other.
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
              placeholder='dominantColor'
              imgClassName={styles.pic}
            />
          </div>
        </div>
        <section>
          <Intro name='Instagram Images' emoji='🖼️' label='Emoji of a picture frame' />
          <div className={styles.picContainer}>
            {nodes.map((pic) => {
              const image = getImage(pic);
              return <GatsbyImage key={pic.id} image={image} className={styles.instaPic} alt='' />;
            })}
          </div>
        </section>
        <div className={styles.notesLink}>
          <Link to='/blog'>
            <Intro
              name='Click Here To Check Out The Davis Family Blog!'
              emoji='✍🏼'
              label='Emoji of a writing hand'
            />
          </Link>
        </div>
        <div className={styles.notesLink}>
          <Link to='/chalkboard'>
            <Intro name='The Chalkboard' emoji='🖍️' label='Emoji of a Crayon' />
          </Link>
        </div>
      </main>
    </Layout>
  );
};

// Graphql page query for this page

export const data = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "instagram" } }) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(height: 300, width: 300, layout: FIXED)
        }
      }
    }
  }
`;

export default IndexPage;
