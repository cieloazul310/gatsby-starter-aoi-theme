// shadowing of `gatsby-theme-typescript-material-ui`
import { blue as primary, red as secondary } from '@material-ui/core/colors/';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'YuGothic',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default responsiveFontSizes(theme);
