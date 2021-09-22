import * as React from 'react';
// import Typography from '@material-ui/core/Typography';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocation } from '@reach/router';

import Layout from 'gatsby-theme-aoi/src/layout';

function NotFoundPage() {
  const location = useLocation();
  return (
    <Layout title="Not Found">
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          NOT FOUND
        </Typography>
        <Typography variant="h5" gutterBottom>
          <code>{location.pathname}</code> doesn&#39;t exist.
        </Typography>
      </Container>
    </Layout>
  );
}

export default NotFoundPage;
