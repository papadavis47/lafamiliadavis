import * as React from "react";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./inma.module.css";

// markup
const InmaPage = () => {
  return (
    <Layout pageTitle="Inma's Page">
      <Intro name='The Dancing Mom' emoji='💃🏽' label='A woman dancing' />
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
            <StaticImage
              src='../images/inma.jpg'
              alt='Beautiful Mom on a Happy Day'
              width={700}
              placeholder='tracedSVG'
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default InmaPage;
