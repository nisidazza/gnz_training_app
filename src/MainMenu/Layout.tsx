import { MenuItem, MenuList } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const linkStyle = {
  textDecoration: "none",
};

const Spacing = styled.span`
  height: 20px;
  display: block;
`;

export const Layout = () => {
  return (
    <MenuList>
      <MenuItem>
        <Link to="/item-one" style={linkStyle}>
          ItemOne
        </Link>
      </MenuItem>
      <Spacing />
      <MenuItem>
        <Link to="/item-two" style={linkStyle}>
          ItemTwo
        </Link>
      </MenuItem>
    </MenuList>
  );
};
