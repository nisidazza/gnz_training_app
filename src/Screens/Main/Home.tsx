import { Button, MenuItem, MenuList } from "@mui/material";
import mockData from "../../trainingProgramModel.json";
import { ParentNode } from "../../types";
import { useState } from "react";
import { Placeholder } from "../Sections/Placeholder";

const dataObj = JSON.parse(JSON.stringify(mockData));

const { children } = dataObj as ParentNode;

const buttonNames = children.map((obj) => obj.name);

const getSectionData = (sectionName: string) =>
  children.filter((obj) => obj.name === sectionName);

export const Home = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setOpenSection(name);
  };

  return (
    <>
      {openSection ? (
        <Placeholder data={getSectionData(openSection)} />
      ) : (
        <MenuList>
          {buttonNames.map((name, i) => (
            <MenuItem key={i}>
              <Button
                variant="outlined"
                onClick={() => {
                  handleClick(name);
                }}
              >
                {name}
              </Button>
            </MenuItem>
          ))}
        </MenuList>
      )}
    </>
  );
};
