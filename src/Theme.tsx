import {createTheme, ThemeProvider} from '@mui/material';
import TodoContext from './context/TodoContext';
import {ReactNode, useContext} from 'react';

const $primary = {
  main: '#008080',
  light: '#009494',
};

const Theme = ({children}: {children: ReactNode}) => {
  const {dark} = useContext(TodoContext);

  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      ...(dark
        ? {
            background: {
              default: '#25273C',
              paper: '#25273C',
            },
            primary: {
              main: '#008080',
              light: '#009494',
            },
          }
        : {
            primary: {
              main: '#008080',
              light: '#009494',
            },
          }),
    },
    components: {
      MuiFab: {
        styleOverrides: {
          root: {
            backgroundColor: $primary.main,
            color: '#fff',
            '&:hover': {
              backgroundColor: $primary.light,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: $primary.main,
            '&:hover': {
              backgroundColor: $primary.light,
            },
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            paddingRight: '100px !important',
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
