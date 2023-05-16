import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: { paddingRight: 0 },
        root: { padding: 0 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: "0 !important",
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
          marginBottom: "5px",
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
          marginTop: "5px",
          padding: "4px 0",
          width: "100%",
        },
      },
    },
  },
});
