export type ParentNode = {
  children: (ParentNode | LeafNode)[];
  _parent: null;
  name: string;
};

export type LeafNode = {
  _parent: null;
  main_html_content?: string;
  name: string;
};

export function isParentNode(node: ParentNode | LeafNode): node is ParentNode {
  return (node as ParentNode).children !== undefined;
}