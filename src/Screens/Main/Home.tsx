import { Button, MenuItem, MenuList } from "@mui/material";
import mockData from "../../trainingProgramModel.json";
import { ParentNode } from "../../types";

const dataObj = JSON.parse(JSON.stringify(mockData));

const { children } = dataObj as ParentNode;

const buttonNames = children.map((obj) => obj.name);

export const Home = () => {
  return (
    <MenuList>
      {buttonNames.map((name, i) => (
        <MenuItem key={i}>
          <Button>{name}</Button>
        </MenuItem>
      ))}
    </MenuList>
  );
};
