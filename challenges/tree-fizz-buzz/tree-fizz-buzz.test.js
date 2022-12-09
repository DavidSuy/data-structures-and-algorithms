const { Node, Tree, fizzBuzzTree } = require("./tree-fizz-buzz");

describe("tree fizz buzz", () => {
  let ntree = new Tree();
  ntree.root = new Node(4);
  ntree.root.children[0] = new Node(1);
  ntree.root.children[0].children[0] = new Node(9);
  ntree.root.children[0].children[1] = new Node(10);
  ntree.root.children[0].children[1].children[0] = new Node(18);
  ntree.root.children[0].children[1].children[1] = new Node(11);
  ntree.root.children[0].children[1].children[2] = new Node(15);
  ntree.root.children[1] = new Node(8);
  ntree.root.children[1].children[0] = new Node(12);

  fizzBuzzTree(ntree);

  it(`should return [ 4, 1, 'fizz', 'buzz', 'fizz', 11, 'fizzBuzz', 8, 'fizz' ]
      when given [ 4, 1, 9, 10, 18, 11, 15, 8, 12 ]
  `, () => {
    expect(ntree.print()).toEqual([
      4,
      1,
      "fizz",
      "buzz",
      "fizz",
      11,
      "fizzBuzz",
      8,
      "fizz",
    ]);
  });
});
