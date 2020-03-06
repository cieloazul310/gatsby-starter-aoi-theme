//const myTheme = require('./src/utils/theme').default;

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Typescript App Shell`,
    description: 'A GatsbyJS starter using Material Design written with TypeScript.',
    lang: 'ja',
    siteUrl: 'https://cieloazul310.github.io/gatsby-starter-typescript-material-ui-theme/',
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
  pathPrefix: '/gatsby-starter-typescript-material-ui-theme',
  plugins: [
    {
      resolve: `gatsby-theme-typescript-material-ui`,
      options: {
        //theme: myTheme
      }
    },
    `gatsby-plugin-graphql-codegen`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`
  ]
};
