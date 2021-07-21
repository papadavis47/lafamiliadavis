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
              John Davis is a software engineer focused on front end web development technologies.
              His main focus is React.js - along with Next.js and Gatsby.
            </p>
            <p>
              The main love in his life is his family - a wife and three kids. He is using this
              website as a place to experiment with Gatsby.
            </p>
            <p>
              This website is his sandbox - constantly changing. He wanted the content of the site
              to revolve around what inspires him more than anything else.
            </p>
            <p>His beautiful family.</p>
            <p>
              In addition to be an alternative to social media for his family, from the beginning he
              wanted this site to be a place for experimentation and fun as a web developer.
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
