/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `どんどこすすむのホームページ`,
    description: `どんどこすすむ公式ホームページ`,
    author: `@dondoko_susumu`,
    siteURL: 'https://xn--28jma5da5l6e.com/',
    image: `https://xn--28jma5da5l6e.com/ogp.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `どんどこすすむのホームページ`,
        short_name: `どんどこのHP`,
        start_url: `/`,
        background_color: `#000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/dondoko_susumu.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-DV76CN74K6", // ここにあなたのGA4測定ID
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
