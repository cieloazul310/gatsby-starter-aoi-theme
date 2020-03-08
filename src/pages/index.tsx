import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-typescript-material-ui/src/layout';
import AppLink from 'gatsby-theme-typescript-material-ui/src/components/AppLink';
/*
interface Props {
}
*/
function IndexPage() {
  return (
    <Layout maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Gatsby Theme Aoi Example
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        This is an example page using Gatsby Theme Aoi.
      </Typography>
      <Typography variant="h4" component="h3" gutterBottom>
        Features
      </Typography>
      <Typography variant="body1" paragraph>
        - Fast, simple and functionally material design layout.
      </Typography>
      <Typography variant="body1" paragraph>
        - Using TypeScript
      </Typography>
      <Typography variant="body1" paragraph>
        - Less dependencies make you use the gatsby-theme easily.
      </Typography>
      <AppLink to="/page-2/">Link to Page 2</AppLink>
    </Layout>
  );
}

export default IndexPage;
