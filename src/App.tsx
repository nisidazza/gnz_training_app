import { useEffect, useState } from "react";
import styled from "styled-components";
import { Home } from "./Screens/Home";
import { SplashScreen } from "./SplashScreen";
import mockData from "./trainingProgramModel.json";
import { ContentLeaf, ContentNode, Dictionary, isContentNode } from "./types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 1.67rem;
`;

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
export const hashToNode: Dictionary<ContentNode | ContentLeaf> = {};
assignParentRef(dataObj, hashToNode);

console.log(dataObj);

export const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setInitialLoading(false), 2000);
    console.log("App");
  }, []);

  return (
    <Wrapper>
      {initialLoading ? (
        <SplashScreen />
      ) : (
        <Home contentTree={dataObj} hashToNode={hashToNode} />
      )}
    </Wrapper>
  );
};
