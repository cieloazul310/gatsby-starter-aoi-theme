module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Aoi Theme`,
    description: 'A GatsbyJS starter using Gatsby Aoi Theme based on Material Design written with TypeScript.',
    lang: '',
    siteUrl: 'https://cieloazul310.github.io/gatsby-starter-aoi-theme',
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
      youtube: 'hollytube0310',
    },
  },
  pathPrefix: '/gatsby-starter-aoi-theme',
  plugins: [
    {
      resolve: `gatsby-theme-aoi`,
      options: {
        siteId: `gatsby-starter-aoi-theme`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
      },
    },
    `gatsby-plugin-graphql-codegen`,
  ],
};
