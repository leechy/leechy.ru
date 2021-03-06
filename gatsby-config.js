module.exports = {
  siteMetadata: {
    title: `Index Of /`,
    author: `Andrey “Leechy” Lechev`,
    description: `Some frontender thoughts`,
    siteUrl: `https://www.leechy.ru/`,
    social: {
      twitter: `andreykalechev`,
      github: `leechy`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131522567-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ondex Of /`,
        short_name: `Leechy.ru`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4a90e2`,
        display: `minimal-ui`,
        icon: `content/assets/leechy-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '52143076',
        webvisor: true,
        trackHash: true,
        version: 2,
      },
    },
  ],
}
