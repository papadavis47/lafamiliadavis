module.exports = {
  siteMetadata: {
    title: "La Familia Davis",
    author: "John William Davis",
    description: "A cool place to share things about our family 🤩",
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `instagram`,
        path: `${__dirname}/src/instagram/`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
