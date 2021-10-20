import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        description
        image
      }
    }
  }
`;

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;
  const image = site.siteMetadata.image;
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `twitter:card`, content: "summary_large_image" },
        { name: `twitter:title`, content: { title } },
        { name: `twitter:description`, content: metaDescription },
        { name: `twitter:image`, content: image },
      ]}
    ></Helmet>
  );
};

export default Seo;
