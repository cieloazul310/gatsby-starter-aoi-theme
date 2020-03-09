
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Aoi Theme`,
    description: 'A GatsbyJS starter using Gatsby Aoi Theme based on Material Design written with TypeScript.',
    lang: 'ja',
    siteUrl: 'https://cieloazul310.github.io/gatsby-starter-aoi-theme/',
    author: 'cieloazul310',
    keywords: ['Gatsby', 'TypeScript', 'Material-UI'],
    social: {
      mail: 'mail@cieloazul310.com',
      twitter: 'hollyhock_staff',
      github: 'cieloazul310',
      facebook: 'hollyhock.official',
      gitlab: '',
      linkedin: '',
      medium: 'cieloazul310',
      pocket: 'cieloazul310',
      tumblr: 'cieloazul310',
      instagram: 'mito.hollyhock.official',
      vimeo: 'cieloazul310',
      youtube: 'hollytube0310'
    }
  },
  pathPrefix: '/gatsby-starter-aoi-theme',
  plugins: [
    `gatsby-theme-aoi`,
    `gatsby-plugin-graphql-codegen`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`
  ]
};
