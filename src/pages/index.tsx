import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Layout from 'gatsby-theme-typescript-material-ui/src/layout';
import AppLink from 'gatsby-theme-typescript-material-ui/src/components/AppLink';
import { useAppState, useDispatch } from '../gatsby-theme-typescript-material-ui/utils/AppStateContext';

interface Props {
  //location: LocationWithState;
}

function IndexPage(props: Props) {
  console.log(props);
  const state = useAppState();
  const dispatch = useDispatch();
  const _onIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  }

  return (
    <Layout title="Index Page" maxWidth="md">
      <Typography variant="h2">Index Page</Typography>
      <Typography variant="body1">
        {state.count}
      </Typography>
      <Button variant="contained" color="primary" onClick={_onIncrement}>
        INCREMENT
      </Button>
      <AppLink to="/page-2/">
        Link to Page 2
      </AppLink>
    </Layout>
  );
}

export default IndexPage;
