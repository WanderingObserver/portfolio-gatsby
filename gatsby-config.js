module.exports = {
  siteMetadata: {
    title: `Mohammed Chisti Portfolio`,
    description: `Hi, my name is Mohammed Chisti. I am a software developer specilized in building and designing things for the internet. I work on a wide variety of interesting projects.`,
    author: `@mohammedchisti`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/resources/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mohammed Chisti | Software Developer`,
        short_name: `Mohammed Chisti`,
        start_url: `/`,
        background_color: `#f6f8ff`,
        theme_color: `#f6f8ff`,
        display: `standalone`,
        icon: `src/resources/images/favicon-portfolio-v2.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
