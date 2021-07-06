import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import * as styles from "./index.module.css";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Our Home Page'>
      <Intro name='Our Family' emoji='😍' label='Emoji with Heart Eyes' />
      <main className={styles.page}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam perferendis pariatur
              consequuntur dolores amet officiis placeat. Facere fugiat magni dolor accusantium
              perferendis dolorem consequatur quisquam autem nobis recusandae odio et, nisi nulla
              labore aspernatur aut nam! Dolorem eum esse nemo nobis rem minima. Praesentium cumque
              maxime, hic tempore assumenda soluta?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam perferendis pariatur
              consequuntur dolores amet officiis placeat. Facere fugiat magni dolor accusantium
              perferendis dolorem consequatur quisquam autem nobis recusandae odio et, nisi nulla
              labore aspernatur aut nam! Dolorem eum esse nemo nobis rem minima. Praesentium cumque
              maxime, hic tempore assumenda soluta?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam perferendis pariatur
              consequuntur dolores amet officiis placeat. Facere fugiat magni dolor accusantium
              perferendis dolorem consequatur quisquam autem nobis recusandae odio et, nisi nulla
              labore aspernatur aut nam! Dolorem eum esse nemo nobis rem minima. Praesentium cumque
              maxime, hic tempore assumenda soluta?
            </p>
          </div>
          <div className={styles.gridItem2}>
            <StaticImage src='../images/our-family.jpg' alt='Two handsome twin boys' width={700} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
