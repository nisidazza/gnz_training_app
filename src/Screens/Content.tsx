import { Button, MenuItem, MenuList } from "@mui/material";
import { FC } from "react";
import { ContentNode } from "../types";

export const Content: FC<{
  node: ContentNode;
  onClick: (hash: number) => void;
}> = ({ node, onClick }) => {
  return (
    <MenuList>
      {node.children.map((child, i) => (
        <MenuItem key={i}>
          <Button variant="outlined" onClick={() => onClick(child.hash)}>
            {child.name}
          </Button>
        </MenuItem>
      ))}
    </MenuList>
  );
};
