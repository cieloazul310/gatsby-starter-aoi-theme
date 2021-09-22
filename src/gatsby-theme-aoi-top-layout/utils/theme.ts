/*
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
*/
import { blue, red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

export default responsiveFontSizes(theme);
