export type ContentNode = {
  children: (ContentNode | ContentLeaf)[];
  _parent: null;
  name: string;
  parent?:ContentNode
};

export type ContentLeaf = {
  _parent: null;
  main_html_content?: string;
  name: string;
  parent?:ContentNode
};

export function isContentNode(
  node: ContentNode | ContentLeaf
): node is ContentNode {
  return (node as ContentNode).children !== undefined;
}
