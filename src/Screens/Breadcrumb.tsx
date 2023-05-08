import { Link } from "@mui/material";
import { FC } from "react";
import { ContentLeaf, ContentNode } from "../types";

const getBreadcrumbsLinks = (node?: ContentNode | ContentLeaf) => {
  const breadcrumbLinks = [];
  do {
    breadcrumbLinks.unshift(node);
    node = node?.parent;
  } while (node);

  // console.log(breadcrumbLinks);

  return breadcrumbLinks;
};

const populateBreadcrumb = (
  node: ContentNode | ContentLeaf,
  setCurrentContent: React.Dispatch<
    React.SetStateAction<ContentNode | ContentLeaf>
  >
) => {
  const breadcrumbLinks = getBreadcrumbsLinks(node);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <>/</>
      {breadcrumbLinks.map((link) => (
        <>
          <Link onClick={() => setCurrentContent(link!)}>{link?.name}</Link>/
        </>
      ))}
    </div>
  );
};

export const Breadcrumbs: FC<{
  node: ContentNode | ContentLeaf;
  setCurrentContent: React.Dispatch<
    React.SetStateAction<ContentNode | ContentLeaf>
  >;
}> = ({ node, setCurrentContent }) => {
  return <>{populateBreadcrumb(node, setCurrentContent)}</>;
};
