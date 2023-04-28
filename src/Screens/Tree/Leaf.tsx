import { FC } from "react";
import { ContentLeaf } from "../../types";
import { Box, Grid, Typography } from "@mui/material";
import parse from "html-react-parser";

export const Leaf: FC<{ leaf: ContentLeaf }> = ({ leaf }) => {
  return (
    <Grid>
      <Grid item xs={12}>
        <Box>
          <Typography>{leaf.name}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>{parse(leaf.main_html_content!)}</Box>
      </Grid>
    </Grid>
  );
};
