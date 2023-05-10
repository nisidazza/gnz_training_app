import { Button, MenuItem, MenuList } from "@mui/material";
import { FC } from "react";
import { ContentNode } from "../types";

export const Content: FC<{
  data: ContentNode;
  onClick: (hash: number) => void;
}> = ({ data, onClick }) => {
  return (
    <MenuList>
      {data.children.map((child, i) => (
        <MenuItem key={i}>
          <Button variant="outlined" onClick={() => onClick(child.hash)}>
            {child.name}
          </Button>
        </MenuItem>
      ))}
    </MenuList>
  );
};
