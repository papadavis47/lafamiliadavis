import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import * as styles from "./main.module.css";

// markup
const JohnPage = () => {
  return (
    <Layout>
      <Seo title='John' description='The Cool Programmer Dad' />
      <Intro name='The Cool Dad' emoji='🎽' labe='Runner Shirt' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>
              John Davis is a software engineer focused on JavaScript and Python. His primary
              interest is React.js - along with Next.js, Gatsby, and the rest of the React
              ecosystem. His favorite backend technologies are Express, Django and Flask. He is also
              interested in all things JAMStack.
            </p>
            <p>The main love in his life is his family.</p>
            <p>
              He uses this website as a place to experiment with Gatsby. These pages are his sandbox
              - and they will be constantly changing. He wanted the content of the site to revolve
              around what inspires him more than anything else.
            </p>
            <p>
              From the beginning he wanted this small space on the internet to be a place for
              experimentation and fun.
            </p>
          </div>
          <div>
            <StaticImage
              src='../images/john.jpg'
              alt='A self portrait in a rocking chair'
              width={700}
              placeholder='blurred'
              transformOptions={{ grayscale: true }}
              imgClassName={styles.pic}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default JohnPage;
