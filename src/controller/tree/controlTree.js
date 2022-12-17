export const connector = (d) => {
  return (
    "M" +
    (d.parent.y + 150) +
    "," +
    d.parent.x +
    "V" +
    (d.x + 20) +
    "H" +
    (d.y + 100)
  );
};

export const collapse = (d) => {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
};

export const expand = (d) => {
  const children = d.children ? d.children : d._children;
  if (d._children) {
    d.children = d._children;
    d._children = null;
  }
  if (children) children.forEach(expand);
};
