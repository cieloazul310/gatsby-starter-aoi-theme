import * as React from 'react';
import { withMuiTheme } from '@harelpls/storybook-addon-materialui';

import { createMuiTheme, responsiveFontSizes, lighten } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../src/gatsby-theme-aoi-top-layout/utils/theme';

const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: lighten(theme.palette.primary.main, 0.4),
      },
      secondary: {
        main: lighten(theme.palette.secondary.main, 0.4),
      },
    },
  })
);

export default {
  title: 'Material-UI',
  decorators: [
    withMuiTheme({
      'Default theme': theme,
      'Dark theme': darkTheme,
    }),
  ],
};

export function AoiLayout() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Material-UI</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export function MuiTypography() {
  return (
    <Container maxWidth="md">
      <Box py={2}>
        <Typography variant="h1">Gatsby Theme Aoi h1</Typography>
        <Typography variant="h2">Gatsby Theme Aoi h2</Typography>
        <Typography variant="h3">Gatsby Theme Aoi h3</Typography>
        <Typography variant="h4">Gatsby Theme Aoi h4</Typography>
        <Typography variant="h5">Gatsby Theme Aoi h5</Typography>
        <Typography variant="h6">Gatsby Theme Aoi h6</Typography>
        <Typography variant="subtitle1">Gatsby Theme Aoi subtitle1</Typography>
        <Typography variant="subtitle2">Gatsby Theme Aoi subtitle2</Typography>
        <Typography variant="body1">Gatsby Theme Aoi body1</Typography>
        <Typography variant="body2">Gatsby Theme Aoi body2</Typography>
        <Typography variant="button">Gatsby Theme Aoi button</Typography>
        <Typography variant="caption">Gatsby Theme Aoi caption</Typography>
        <Typography variant="overline">Gatsby Theme Aoi overline</Typography>
        <Typography variant="srOnly">Gatsby Theme Aoi srOnly</Typography>
      </Box>
    </Container>
  );
}
