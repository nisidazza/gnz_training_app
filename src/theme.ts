import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#57B3DF',
          border: '1px solid #57B3DF',
          color: 'white',

          '&:hover': {
            backgroundColor: '#4d92b3',
            border: '1px solid #4d92b3',
          }
        }
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        ol: {
          justifyContent: 'center'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          justifyContent: 'center',

          '&:hover': {
            backgroundColor: 'transparent',
            border: 'none',
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#777",
          textDecoration: 'none',
        }
      }
    }
  },
});
