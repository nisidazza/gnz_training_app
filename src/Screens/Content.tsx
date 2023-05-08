import { Button, MenuItem, MenuList } from "@mui/material";
import { FC } from "react";
import { ContentLeaf, ContentNode } from "../types";

export const Content: FC<{
  data: ContentNode;
  setCurrentContent: React.Dispatch<
    React.SetStateAction<ContentNode | ContentLeaf>
  >;
}> = ({ data, setCurrentContent }) => {
  return (
    <MenuList>
      {data.children.map((child, i) => (
        <MenuItem key={i}>
          <Button variant="outlined" onClick={() => setCurrentContent(child)}>
            {child.name}
          </Button>
        </MenuItem>
      ))}
    </MenuList>
  );
};
