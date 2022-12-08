const { Node, BinarySearchTree } = require("./trees");

describe("Binary Search Trees", () => {
  it("Can successfully instantiate an empty tree", () => {
    let bst = new BinarySearchTree();
    expect(bst.root).toBe(null);
  });

  let bst = new BinarySearchTree();

  it("Can successfully instantiate a tree with a single root node", () => {
    bst.insert(6);
    expect(bst.root.value).toBe(6);
  });

  it("For a Binary Search Tree, can successfully add a left child and right child properly to a node", () => {
    bst.insert(5);
    bst.insert(7);

    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(7);
  });

  it("Can successfully return a collection from a preorder traversal", () => {
    bst.insert(3);
    bst.insert(9);
    bst.insert(2);
    expect(bst.DFSPreOrder()).toEqual([6, 5, 3, 2, 7, 9]);
  });

  it("Can successfully return a collection from an inorder traversal", () => {
    expect(bst.DFSInOrder()).toEqual([2, 3, 5, 6, 7, 9]);
  });

  it("Can successfully return a collection from a postorder traversal", () => {
    expect(bst.DFSPostOrder()).toEqual([2, 3, 5, 9, 7, 6]);
  });

  it("Returns true	false for the contains method, given an existing or non-existing node value", () => {
    expect(bst.contains(10)).toBe(false);
    expect(bst.contains(3)).toBe(true);
  });
  it("Should return [2,7,5,2,6,9,5,11,4], given a certain tree", () => {
    let tree = new BinarySearchTree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    expect(tree.BFS()).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
});
