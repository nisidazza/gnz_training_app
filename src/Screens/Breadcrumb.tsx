import { Breadcrumbs, Link } from "@mui/material";
import React, { FC } from "react";
import { ContentLeaf, ContentNode } from "../types";

const getBreadcrumbsLinks = (node?: ContentNode | ContentLeaf) => {
  const breadcrumbLinks = [];
  do {
    breadcrumbLinks.unshift(node);
    node = node?.parent;
  } while (node);

  return breadcrumbLinks;
};

export const Breadcrumb: FC<{
  node: ContentNode | ContentLeaf;
  setCurrentContent: React.Dispatch<
    React.SetStateAction<ContentNode | ContentLeaf>
  >;
}> = ({ node, setCurrentContent }) => {
  const breadcrumbLinks = getBreadcrumbsLinks(node);

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ justifyContent: "center" }}>
      {breadcrumbLinks.map((link, i) => {
        const isCurrentItem =
          breadcrumbLinks.indexOf(link) === breadcrumbLinks.length - 1;
        return (
          <Link
            underline="hover"
            color={isCurrentItem ? "#555" : "#777"}
            key={i}
            onClick={() => setCurrentContent(link!)}
            aria-current={isCurrentItem}
          >
            {link?.name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
