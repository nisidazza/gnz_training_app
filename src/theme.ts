import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: { paddingRight: 0 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          paddingRight: "20px !important",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#57B3DF",
          border: "1px solid #57B3DF",
          color: "white",
          width: "100%",

          "&:hover": {
            backgroundColor: "#4d92b3",
            border: "1px solid #4d92b3",
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: { padding: "0 16px" },
        ol: {
          marginBottom: "20px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          justifyContent: "center",

          "&:hover": {
            backgroundColor: "transparent",
            border: "none",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#777",
          textDecoration: "none",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          marginTop: "20px",
          width: "100%",
        },
      },
    },
  },
});
