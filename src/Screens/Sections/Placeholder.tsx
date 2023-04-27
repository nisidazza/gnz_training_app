import { FC } from "react";
import { ParentNodeChild } from "../../types";
import { MenuList, MenuItem, Button } from "@mui/material";

export const Placeholder: FC<{ data: ParentNodeChild[] }> = ({ data }) => {
  const sections = data.flatMap((obj) => obj.children).map((obj) => obj.name);

  return (
    <MenuList>
      {sections.map((section, i) => (
        <MenuItem key={i}>
          <Button variant="outlined">{section}</Button>
        </MenuItem>
      ))}
    </MenuList>
  );
};
