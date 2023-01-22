import { createTheme } from '@mui/material/styles';
import { blue, pink, lightBlue } from '@mui/material/colors';
import styled, { keyframes } from 'styled-components'



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
      default: '#fff',
  

    },
    primary: {
      main: blue[600],
      light: '#E1BEE7',
      dark: '#121212 ',
      contrastText: '#fff'
    },
    secondary: {
      main: '#fafafa',
      light: '#C8E6C9',
      dark: '#388E3C',
    },
    success: {
      main: '#4CAF50',
      contrastText: '#fff'
    },
    error: {
      main: '#F44336',
      contrastText: '#fff'
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
