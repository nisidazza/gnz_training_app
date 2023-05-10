import { useEffect, useState } from "react";
import mockData from "../trainingProgramModel.json";
import {
  ContentLeaf,
  ContentNode,
  Dictionary,
  HistoryState,
  isContentNode,
} from "../types";
import { Breadcrumb } from "./Breadcrumb";
import { Content } from "./Content";
import { Leaf } from "./Leaf";

const getHashCode = (value: string) => {
  var hash = 0,
    i,
    chr;
  if (value.length === 0) return hash;
  for (i = 0; i < value.length; i++) {
    chr = value.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const assignParentRef = (
  node: ContentNode | ContentLeaf,
  dict: Dictionary<ContentNode | ContentLeaf>,
  parentNode?: ContentNode,
  level = 0
) => {
  const hash = getHashCode(node.name + parentNode?.name + level);
  dict[hash] = node;
  node.hash = hash;
  node.parent = parentNode;
  if (isContentNode(node)) {
    node.children.forEach((child) =>
      assignParentRef(child, dict, node, level + 1)
    );
  }
};

const dataObj = JSON.parse(JSON.stringify(mockData)) as ContentNode;
const hashToNode: Dictionary<ContentNode | ContentLeaf> = {};
assignParentRef(dataObj, hashToNode);

console.log(dataObj);

export const getContentByHash = (hash: number) => {
  return hashToNode[hash];
};

export const Home = () => {
  const [currentHash, setCurrentHash] = useState<number>(dataObj.hash);
  const setHashAndHistory = (hash: number) => {
    const state: HistoryState = { hash: hash };
    window.history.pushState(state, "");
    setCurrentHash(hash);
  };

  useEffect(() => {
    setHashAndHistory(dataObj.hash);
  }, []);

  useEffect(() => {
    console.log("sta girando");
    window.addEventListener("popstate", (e) => {
      if (e.state.hash) {
        setCurrentHash(e.state.hash);
        e.stopPropagation();
      }
    });
  }, []);

  useEffect(() => {}, [currentHash]);

  // console.log(window.history);

  const currentContent = getContentByHash(currentHash);
  return (
    <>
      <Breadcrumb node={currentContent} onClick={setHashAndHistory} />
      {!isContentNode(currentContent) ? (
        <Leaf leaf={currentContent} />
      ) : (
        <Content data={currentContent} onClick={setHashAndHistory} />
      )}
    </>
  );
};
