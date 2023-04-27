export type ParentNode = {
    children: ParentNodeChild[];
    _parent: null;
    name: string;
  };
  
  export type ParentNodeChild = {
    children: ParentNodeChild[] | LeafNode;
    _parent: null;
    name: string;
  };
  
  export type LeafNode = {
    _parent: null;
    main_html_content?: string;
    name: string;
  };