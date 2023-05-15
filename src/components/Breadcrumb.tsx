import { Breadcrumbs, Link } from "@mui/material";
import { FC } from "react";
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
  onClick: (hash: number) => void;
}> = ({ node, onClick }) => {
  const breadcrumbLinks = getBreadcrumbsLinks(node);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbLinks.map((link, i) => {
        return (
          <Link
            underline="hover"
            fontWeight={500}
            key={i}
            onClick={() => onClick(link?.hash!)}
            aria-current={
              breadcrumbLinks.indexOf(link) === breadcrumbLinks.length - 1
            }
          >
            {link?.name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
