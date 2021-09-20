/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Tokyay Bahçe`,
    description: `Balıkesir Gönen'de Et, Pide, Kahvaltı, Tatlı, Kahve çeşitleriyle hizmete girmiştir.`,
    author: `Tokyay Bahçe`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Tokyay Bahce",
        short_name: "TokyayBahce",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#16191a",
        display: "standalone",
        icon: "src/img/favicon/mondello-favicon-white.svg",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
  ],
}
