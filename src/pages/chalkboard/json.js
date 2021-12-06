import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import myFamily from "../../../JSONData/my_family.json";
import Layout from "../../components/Layout";
// import diego from "../../more_images/cool_diego_joshuatree.jpg";

function JSON() {
  return (
    <Layout>
      <h1>This is working now.</h1>
      <StaticImage src='../../more_images/JoshuaTreeKids.jpg' alt='' width={600} height={400} />
      {myFamily.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.firstName}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export default JSON;
