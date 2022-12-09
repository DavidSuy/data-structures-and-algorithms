class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  print() {
    let printArr = [];
    printArr.push(this.root.data);
    function traverse(node) {
      node.children.forEach((e, idx) => {
        printArr.push(e.data);
        traverse(node.children[idx]);
      });
    }
    traverse(this.root);
    return printArr;
  }
}

function fizzBuzzTree(tree) {
  let data = [];

  function traverse(node) {
    // if (node == null) return;
    if (data.length === 0) {
      checkDivisible(node);
    }

    node.children.forEach((e, idx) => {
      checkDivisible(e);
      traverse(e);
    });

    function checkDivisible(e) {
      if (e.data === 1 || e.data === 0) {
        data.push(e.data);
      } else if (e.data % 5 === 0 && e.data % 3 === 0) {
        e.data = "fizzBuzz";
        data.push(e.data);
      } else if (e.data % 5 === 0) {
        e.data = "buzz";
        data.push(e.data);
      } else if (e.data % 3 === 0) {
        e.data = "fizz";
        data.push(e.data);
      } else {
        data.push(e.data);
      }
    }
  }
  traverse(tree.root);
  return tree;
}

module.exports = {
  Node,
  Tree,
  fizzBuzzTree,
};
