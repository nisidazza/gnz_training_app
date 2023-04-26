import { Box, Typography } from "@mui/material";

export const SplashScreen = () => {
  return (
    <Box sx={{ width: "auto", height: "auto" }}>
      <img src={"/images/GNZ_logo.png"} alt="GNZ logo" />
      <Typography>GNZ Training App</Typography>
    </Box>
  );
};
