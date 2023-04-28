import { FC } from "react";
import { ContentNode } from "../types";
import { MenuList, MenuItem, Button } from "@mui/material";



export const Content: FC<{
  data: ContentNode;
  setClickedName: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ data, setClickedName }) => {
  const nodeNames = data.children.map((obj) => obj.name);

  return (
    <MenuList>
      {nodeNames.map((nodeName, i) => (
        <MenuItem key={i}>
          <Button variant="outlined" onClick={() => setClickedName(nodeName)}>
            {nodeName}
          </Button>
        </MenuItem>
      ))}
    </MenuList>
  );
};
