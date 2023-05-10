import { FC, useEffect, useState } from "react";
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
import { SearchBar } from "./SearchBar";

export const Home: FC<{
  contentTree: ContentNode;
  hashToNode: Dictionary<ContentNode | ContentLeaf>;
}> = ({ contentTree, hashToNode }) => {
  const [currentHash, setCurrentHash] = useState<number>(contentTree.hash);
  const setHashAndHistory = (hash: number) => {
    const state: HistoryState = { hash: hash };
    window.history.pushState(state, "");
    setCurrentHash(hash);
  };

  useEffect(() => {
    setHashAndHistory(contentTree.hash);
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

  const currentContent = hashToNode[currentHash];
  return (
    <>
      <SearchBar />
      <Breadcrumb node={currentContent} onClick={setHashAndHistory} />
      {!isContentNode(currentContent) ? (
        <Leaf leaf={currentContent} />
      ) : (
        <Content node={currentContent} onClick={setHashAndHistory} />
      )}
    </>
  );
};
