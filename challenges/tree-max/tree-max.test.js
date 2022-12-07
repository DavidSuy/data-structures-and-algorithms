const { BinaryTree } = require("./tree-max");

describe("Tree max", () => {
  let tree = new BinaryTree();
  tree.insert(2);
  tree.insert(7);
  tree.insert(5);
  tree.insert(3);
  tree.insert(1);

  it("Should return 11", () => {
    expect(tree.findMax(tree.root)).toBe(7);
  });
});
