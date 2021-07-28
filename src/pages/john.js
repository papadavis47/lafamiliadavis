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
            <p>John William Davis is a software engineer focused on JavaScript and Python.</p>
            <p>
              His primary interest is building user interfaces with React - including with Next.js
              and Gatsby ❤️
            </p>

            <p>
              His favorite backend technologies are Express, Django and Flask. He is also interested
              in all things JAMStack.
            </p>
            <p>The main love in his life is his family.</p>
            <p>
              He uses this website as a place to experiment with Gatsby. These pages are his sandbox
              - and they will be constantly changing.
            </p>
            <p>
              From the beginning he wanted this small space on the internet to be a place for
              experimentation and fun.
            </p>
            <p>He is experimenting every week 💯</p>
            <p>
              So <strong>Stay Tuned</strong> 😎
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
