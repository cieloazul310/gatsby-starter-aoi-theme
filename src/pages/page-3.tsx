import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import GithubIcon from '@material-ui/icons/Github';
import Layout from 'gatsby-theme-aoi/src/layout';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';

function ThirdPage() {
  return (
    <Layout
      title="Without Drawer Example"
      maxWidth="md"
      disableDrawer
      fab={
        <Fab color="primary" href="https://github.com">
          <GithubIcon />
        </Fab>
      }
    >
      <Typography variant="h3" component="h2" gutterBottom>
        Without Drawer Example
      </Typography>
      <Typography paragraph>This is an example layout without drawer.</Typography>
      <AppLink to="/">Go to Index Page</AppLink>
      <AppLink to="/page-2/">Go to Second Page</AppLink>
    </Layout>
  );
}

export default ThirdPage;
