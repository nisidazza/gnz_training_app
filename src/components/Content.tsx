import { Button, MenuItem, MenuList, styled } from "@mui/material";
import { FC } from "react";
import { ContentNode } from "../types";

const StyledSpan = styled("span")({
  fontWeight: 600,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  maxWidth: "inherit",
});

export const Content: FC<{
  node: ContentNode;
  onClick: (hash: number) => void;
}> = ({ node, onClick }) => {
  return (
    <MenuList>
      {node.children.map((child, i) => (
        <MenuItem key={i}>
          <Button variant="outlined" onClick={() => onClick(child.hash)}>
            <StyledSpan>{child.name}</StyledSpan>
          </Button>
        </MenuItem>
      ))}
    </MenuList>
  );
};
