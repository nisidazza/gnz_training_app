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
  limit: 100,
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
  const [selectedValue, setSelectedValue] = useState<ContentLeaf | null>(null);

  const leaves = getLeafNodeList(contentTree);

  const renderOptions = (
    props: React.HTMLAttributes<HTMLElement>,
    option: ContentLeaf
  ) => {
    return (
      <ListItem
        {...props}
        key={option.hash + (option.parent?.hash.toString() || "no hash")}
      >
        {option.name}
      </ListItem>
    );
  };

  const onChange = (selectedValue: ContentLeaf) => {
    setSelectedValue(selectedValue);
    setCurrentHash(selectedValue.hash);
  };

  return (
    <div
      style={{
        marginBottom: "30px",
        width: "100%",
        height: "100%",
        zIndex: 1000,
      }}
    >
      <Autocomplete
        id="node-leaves-search"
        clearOnBlur
        filterOptions={filterOptions}
        getOptionLabel={(option) => option.name}
        inputValue={inputValue}
        onChange={(e, value, reason) => {
          if (value && value.hash) {
            onChange(value);
          }
        }}
        onInputChange={(e, value, reason) => {
          setInputValue(value);
        }}
        openOnFocus
        options={leaves}
        renderOption={renderOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-search"
            type="search"
            InputProps={{
              ...params.InputProps,
              placeholder: "Choose an option",
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
        sx={{ width: "100%" }}
        value={selectedValue}
      />
    </div>
  );
};
