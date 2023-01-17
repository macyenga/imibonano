import { createTheme } from '@mui/material/styles';
import { blue, pink, lightBlue } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    background: {
      default: '#f5f5f5'
    },
    primary: {
      main: blue[600],
      contrastText: '#fff'
    },
    secondary: {
      main: blue[600]
    },
    success: {
      main: lightBlue[600]
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'h5'
        }
      }
    }
  }
});

export default theme;
