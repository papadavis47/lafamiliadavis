import * as React from "react";
import { Link } from "gatsby";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import * as styles from "./main.module.css";

// markup
const DiegoPage = () => {
  return (
    <Layout>
      <Seo title='Diego' />
      <Intro name='El Niño Guapito' emoji='🚀' label='Rocket Ship' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>Diego is a very cool kid 😎 </p>
            <p>
              He loves computer gaming ( Fortnite, Roblox, Minecraft ) and he
              enjoys spending time with his family and with his friends from
              school.
            </p>
            <p>He is good at many different things. </p>
            <p>
              All of his life he has had a wonderful sense of humour. From the
              time he was a baby - he has loved to laugh. And he has always been
              funny 😆
            </p>
            <p>
              Diego is the first born twin and has been nicknamed "Baby A" since
              before he was born ( meaning the baby growing closest to his
              mother's cervix ).
            </p>
            <p>
              His brother, <Link to='/santiago'>Santiago</Link> ("Baby B"), has
              always been there for him and Diego has always been the closest
              friend of his brother.
            </p>

            <p>
              Both of his parents are proud of his intelligence, and his charm.
            </p>
            <p>
              Most of all, his parents are proud that he is a very kind hearted
              boy 🤹‍♂️
            </p>
          </div>
          <div>
            <StaticImage
              src='../images/diego-nica.jpg'
              alt='My beautiful boy, Diego'
              placeholder='blurred'
              width={700}
              imgClassName={styles.pic}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default DiegoPage;
