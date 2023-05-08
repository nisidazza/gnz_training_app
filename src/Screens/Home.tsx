import { useEffect, useState } from "react";
import mockData from "../trainingProgramModel.json";
import { ContentLeaf, ContentNode, isContentNode } from "../types";
import { Breadcrumb } from "./Breadcrumb";
import { Content } from "./Content";
import { Leaf } from "./Leaf";

const assignParentRef = (
  node: ContentNode | ContentLeaf,
  parentNode?: ContentNode
) => {
  node.parent = parentNode;
  if (isContentNode(node)) {
    node.children.forEach((child) => assignParentRef(child, node));
  }
};

const dataObj = JSON.parse(JSON.stringify(mockData)) as ContentNode;
assignParentRef(dataObj);

export const Home = () => {
  const [currentContent, setCurrentContent] = useState<
    ContentLeaf | ContentNode
  >(dataObj);

  useEffect(() => {
    setCurrentContent(currentContent);
  }, [currentContent]);

  return (
    <>
      <Breadcrumb node={currentContent} setCurrentContent={setCurrentContent} />
      {!isContentNode(currentContent) ? (
        <Leaf leaf={currentContent} />
      ) : (
        <Content data={currentContent} setCurrentContent={setCurrentContent} />
      )}
    </>
  );
};
