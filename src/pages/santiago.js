import * as React from "react";
import { Link } from "gatsby";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import * as styles from "./main.module.css";

// markup
const SantiagoPage = () => {
  return (
    <Layout>
      <Seo title='Santiago' />
      <Intro name='El Hijo Bonito' emoji='🚴‍♂️' label='Kid on a Bike Emoji' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>Santiago is a beautiful boy 🥇</p>
            <p>
              Like his brother, <Link to='/diego'>Diego</Link> ("Baby A"), Santiago enjoys video
              games and anime. His favorite games are Fortnite, Roblox and Minecraft.
            </p>
            <p>
              Some of his other interests include watching movies, playing basketball and reading
              books that interest him.
            </p>
            <p>He is great on a bike 💯 He is a good swimmer and he loves the water.</p>
            <p>
              Santiago can be wise beyond his years. He can be very insightful and he has a huge,
              kind heart 💖
            </p>
            <p>
              There is no one that his <Link to='/john'>father</Link> would rather watch a move with
              than Santiago.
            </p>
            <p>
              He is also a great partner for his <Link to='/inma'>mother</Link> while binge watching
              TV shows 😀
            </p>
            <p>His parents have been proud of him everyday - since his first day ⭐</p>
            <StaticImage
              src='../images/fortnite-blue.png'
              alt='Fortnite logo'
              width={600}
              placeholder='blurred'
            />
          </div>
          <div>
            <StaticImage
              src='../images/santi-nica.jpg'
              alt='My beautiful boy, Santiago'
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

export default SantiagoPage;
