import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import Layout from 'gatsby-theme-typescript-material-ui/src/layout';

interface Props {
  //location: LocationWithState;
}

function IndexPage(props: Props) {
  console.log(props);
  return (
    <Layout title="Index Page" maxWidth="md">
      <Typography variant="h2">
        Index Page
      </Typography>
    </Layout>
  );
}

export default IndexPage;
