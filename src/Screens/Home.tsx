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

const getContentLeaf = (leafName: string, leaves: ContentLeaf[]) =>
  leaves
    .filter((obj) => !isContentNode(obj))
    .find((obj) => obj.name === leafName) as ContentLeaf;

export const Home = () => {
  const [openNodeContent, setOpenNodeContent] = useState<ContentNode>(dataObj);
  const [leafContent, setLeafContent] = useState<ContentLeaf | null>(null);

  const [clickedName, setClickedName] = useState<string | null>(null);

  const contentNode = getContentNode(clickedName!, openNodeContent!);
  const contentLeaf = getContentLeaf(clickedName!, openNodeContent!.children);

  useEffect(() => {
    if (contentNode) {
      setOpenNodeContent(contentNode);
    }
    if (contentLeaf) {
      setLeafContent(contentLeaf);
    }
    setClickedName(null);
  }, [clickedName, contentNode, contentLeaf]);

  return (
    <>
      {leafContent ? (
        <Leaf leaf={leafContent} />
      ) : (
        <Content data={openNodeContent!} setClickedName={setClickedName} />
      )}
    </>
  );
};
