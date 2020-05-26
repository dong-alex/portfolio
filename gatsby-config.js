require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    title: `Personal Portfolio`,
    description: `Work Experience, Projects, Connect`,
    author: `@dong-alex`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: true,
        defer: true,
        args: `?onload=onloadCallback&render=explicit`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-transformer-json",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  mapping: {
    "ProjectsJson.technologies": "TechnologiesJson",
    "DataJson.frontend": "TechnologiesJson",
    "DataJson.backend": "TechnologiesJson",
    "DataJson.database": "TechnologiesJson",
    "DataJson.tools": "TechnologiesJson",
  },
}
