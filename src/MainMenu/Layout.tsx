import { MenuItem, MenuList } from "@mui/material";
import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <MenuList>
      <MenuItem>
        <Link to="/item-one">ItemOne</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/item-two">ItemTwo</Link>
      </MenuItem>
    </MenuList>
  );
};
