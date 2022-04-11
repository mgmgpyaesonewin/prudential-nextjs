import { ThemeOptions } from '@mui/material/styles';
import { height } from '@mui/system';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
        main: '#eb1b2e',
    },
    secondary: {
        main: '#b71c1c',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '28px',
          height: '45px'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          minHeight: '80px',
        }
      }
    },
  }
};

export default lightThemeOptions;