import * as React from "react";
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
              src='../images/santi-nica.jpg'
              alt='My beautiful boy, Santiago'
              width={700}
              placeholder='blurred'
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SantiagoPage;
