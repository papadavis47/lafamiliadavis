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
          <div>
            <StaticImage
              src='../images/our-family.jpg'
              alt='Two handsome twin boys'
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

export default IndexPage;
