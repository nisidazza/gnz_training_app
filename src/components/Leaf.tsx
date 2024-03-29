import { Box, Grid } from "@mui/material";
import parse from "html-react-parser";
import { FC } from "react";
import { ContentLeaf } from "../types";

export const Leaf: FC<{ leaf: ContentLeaf }> = ({ leaf }) => {
  return (
    <Grid p={"16px"}>
      <Grid item xs={12}>
        <Box>{leaf.main_html_content && parse(leaf.main_html_content)}</Box>
      </Grid>
    </Grid>
  );
};
