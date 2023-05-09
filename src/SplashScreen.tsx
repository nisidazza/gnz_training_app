import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

export const SplashScreen = () => {
  return (
    <StyledContainer>
      <Box sx={{ m: 2 }}>
        <img
          src={"/images/GNZ_logo.png"}
          alt="GNZ logo"
          height="auto"
          width="100%"
        />
      </Box>
      <Typography variant="h5" component="h2" mt={4}>
        GNZ Training Program
      </Typography>
    </StyledContainer>
  );
};
