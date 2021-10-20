module.exports = {
  siteMetadata: {
    title: "La Familia Davis",
    siteUrl: "https://www.lafamiliadavis.com",
    author: "John William Davis",
    description: "A cool place to share things about our family 🤩",
    image:
      "https://res.cloudinary.com/papadavis47/image/upload/v1634753852/our-family_mmcxny.jpg",
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
