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
      <Intro name='The Cool Dad' emoji='🎽' label='Runner Shirt' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>
              John William Davis is a software engineer focused on JavaScript.
            </p>
            <p>
              His primary interest is building user interfaces with{" "}
              <a href='https://reactjs.org/'>React</a> - including with{" "}
              <a href='https://nextjs.org/'>Next.js </a>
              and <a href='https://www.gatsbyjs.com/'>Gatsby</a> ❤️
            </p>

            <p>
              His other interests in programming include Python, MongoDB, Rust,
              ethical hacking, CTF competions, and all things{" "}
              <a href='https://jamstack.org/'>JAMStack</a>. His favorite backend
              frameworks are <a href='https://expressjs.com/'>Express</a>,{" "}
              <a href='https://www.djangoproject.com/'>Django</a> and{" "}
              <a href='https://flask.palletsprojects.com/en/2.0.x/'>Flask</a>.
            </p>
            <p>The main love in his life is his family.</p>
            <p>
              He uses this website as a place to experiment with Gatsby. And to
              celebrate his family ❤️ These pages are his sandbox - and they are
              constantly changing.
            </p>
            <p>
              From the beginning he wanted this small space on the internet to
              be a place for experimentation and fun.
            </p>
            <p>
              He is experimenting every week 💯. Trying out different aspects of
              React and Gatsby.
            </p>
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
        <div className={styles.largePic}>
          <StaticImage
            src='../images/family-meal.jpg'
            alt='Daving Family Lunch Together'
            placeholder='blurred'
            width={800}
            imgClassName={styles.pic}
          />
        </div>
      </main>
    </Layout>
  );
};

export default JohnPage;
