import mockData from "../trainingProgramModel.json";
import { ContentLeaf, ContentNode, isContentNode } from "../types";
import { useEffect, useState } from "react";
import { Content } from "./Content";
import { Leaf } from "./Leaf";

const dataObj = JSON.parse(JSON.stringify(mockData));

export const getContentNode = (nodeName: string, node: ContentNode) =>
  node!.children
    .filter((obj) => isContentNode(obj))
    .find((obj) => obj.name === nodeName) as ContentNode;

const getContent = (leafName: string, node: ContentNode) => {
  if (leafName === null)
    return node
    
  const found = node!.children.find((obj) => obj.name === leafName) as
    | ContentLeaf
    | ContentNode;

  if (isContentNode(found)) {
    return found as ContentNode;
  } else {
    return found as ContentLeaf;
  }
};

export const Home = () => {
  const [currentContent, setCurrentContent] = useState<
    ContentLeaf | ContentNode
  >(dataObj);

  const [clickedName, setClickedName] = useState<string | null>(null);

  const content = getContent(clickedName!, currentContent as ContentNode);

  useEffect(() => {
    setCurrentContent(content);
    setClickedName(null);
  }, [clickedName, content]);

  return (
    <>
      {!isContentNode(currentContent) ? (
        <Leaf leaf={currentContent} />
      ) : (
        <Content data={currentContent} setClickedName={setClickedName} />
      )}
    </>
  );
};
