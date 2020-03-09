import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Layout from 'gatsby-theme-aoi/src/layout';

function IndexPage() {
  return (
    <Layout maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Gatsby Theme Aoi Example
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        This is an example page using Gatsby Theme Aoi.
      </Typography>
      <Typography variant="h5" component="h3" gutterBottom>
        Features
      </Typography>
      <Typography component="ul" paragraph>
        <Typography component="li">TypeScript</Typography>
        <Typography component="li">Material-UI</Typography>
        <Typography component="li">Mobile friendlly responsive UI layout</Typography>
        <Typography component="li">Holding App State</Typography>
        <Typography component="li">Dark Mode</Typography>
      </Typography>
      <Button component={GatsbyLink} color="secondary" to="/page-2/">
        Link to Page 2
      </Button>
      <Button component={GatsbyLink} color="secondary" to="/page-3/">
        Link to Page 3
      </Button>
    </Layout>
  );
}

export default IndexPage;
