import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: 13,
    display4: {
      fontSize: 13,
    },
    display3: {
      fontSize: 13,
    },
    display2: {
      fontSize: 13,
    },
    display1: {
      fontSize: 13,
    },
    headline: {
      fontSize: 13,
    },
    title: {
      fontSize: 13,
    },
    subheading: {
      fontSize: 13,
    },
    body2: {
      fontSize: 13,
    },
    body1: {
      fontSize: 13,
    },
    caption: {
      fontSize: 13,
    },
    button: {
      fontSize: 13,
    },
  },
  palette:  {
    primary: {
      main: "#0b6aaf",
    },

    error: {
        main: "#f44336",
    },
    warning: {
        main: "#ff9800",
    },
    info: {
        main: "#2196f3",
    },
    success: {
        main: "#4caf50"
    },
  },
});
export default theme;