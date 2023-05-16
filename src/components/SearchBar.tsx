import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  InputAdornment,
  ListItem,
  TextField,
  createFilterOptions,
} from "@mui/material";
import { FC, useState } from "react";
import { ContentLeaf, ContentNode, isContentNode } from "../types";

const filterOptions = createFilterOptions<ContentLeaf>({
  stringify: (option) => option.name,
});

const getLeafNodeList = (node: ContentNode, list: ContentLeaf[] = []) => {
  if (node.children && isContentNode(node)) {
    for (var i = 0; i < node.children.length; i++) {
      getLeafNodeList(node.children[i] as ContentNode, list);
    }
  } else {
    list.push(node);
  }
  return list;
};

export const SearchBar: FC<{
  contentTree: ContentNode;
  setCurrentHash: React.Dispatch<React.SetStateAction<number>>;
}> = ({ contentTree, setCurrentHash }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const leaves = getLeafNodeList(contentTree);

  const renderOptions = (
    props: React.HTMLAttributes<HTMLElement>,
    option: ContentLeaf
  ) => {
    return (
      <ListItem
        {...props}
        key={option.hash + (option.main_html_content || option.name)}
      >
        {option.name}
      </ListItem>
    );
  };

  return (
    <Autocomplete
      id="node-leaves-search"
      filterOptions={filterOptions}
      getOptionLabel={(option) => option.name}
      inputValue={inputValue}
      onChange={(e, value, reason) => {
        if (value && value.hash && reason === "selectOption") {
          setCurrentHash(value.hash);
          setInputValue("");
        }
      }}
      onInputChange={(e, value, reason) => {
        setInputValue(value);
      }}
      blurOnSelect={true}
      options={leaves}
      renderOption={renderOptions}
      renderInput={(params) => (
        <TextField
          {...params}
          id="outlined-search"
          type="search"
          InputProps={{
            ...params.InputProps,
            placeholder: "Search",
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
      sx={{ width: "100%", marginBottom: "30px" }}
      value={null}
    />
  );
};
