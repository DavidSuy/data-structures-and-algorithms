"use strict";

const BinaryTree = require("./BinaryTree");
const treeIntersection = require("./tree-intersection");

describe("Testing tree intersection", () => {
  test("Should return an array of values that are in both trees", () => {
    const tree1 = new BinaryTree(150);
    tree1.add(100);
    tree1.add(250);
    tree1.add(75);
    tree1.add(160);
    tree1.add(200);
    tree1.add(350);
    tree1.add(125);
    tree1.add(175);
    tree1.add(300);
    tree1.add(500);

    const tree2 = new BinaryTree(42);
    tree2.add(100);
    tree2.add(600);
    tree2.add(15);
    tree2.add(160);
    tree2.add(200);
    tree2.add(350);
    tree2.add(125);
    tree2.add(175);
    tree2.add(4);
    tree2.add(500);

    const valueArr = treeIntersection(tree1, tree2);
    expect(valueArr).toEqual(["100", "160", "200", "350", "125", "175", "500"]);
  });

  test("Should return an empty array when no repeated values", () => {
    const tree1 = new BinaryTree(150);
    tree1.add(100);
    tree1.add(250);
    tree1.add(75);
    tree1.add(160);
    tree1.add(200);
    tree1.add(350);
    tree1.add(125);
    tree1.add(175);
    tree1.add(300);
    tree1.add(500);

    const tree2 = new BinaryTree(42);
    tree2.add(1);
    tree2.add(2);
    tree2.add(3);
    tree2.add(4);
    tree2.add(5);
    tree2.add(6);
    tree2.add(7);
    tree2.add(8);
    tree2.add(9);
    tree2.add(10);

    const valueArr = treeIntersection(tree1, tree2);
    expect(valueArr).toEqual([]);
  });

  test("Should return all values when trees are exactly the same", () => {
    const tree1 = new BinaryTree(150);
    tree1.add(1);
    tree1.add(2);
    tree1.add(3);
    tree1.add(4);
    tree1.add(5);
    tree1.add(6);
    tree1.add(7);
    tree1.add(8);
    tree1.add(9);
    tree1.add(10);

    const tree2 = new BinaryTree(42);
    tree2.add(1);
    tree2.add(2);
    tree2.add(3);
    tree2.add(4);
    tree2.add(5);
    tree2.add(6);
    tree2.add(7);
    tree2.add(8);
    tree2.add(9);
    tree2.add(10);

    const valueArr = treeIntersection(tree1, tree2);
    expect(valueArr).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ]);
  });

  test("Should not add values repeated in the first tree to the array", () => {
    const tree1 = new BinaryTree(150);
    tree1.add(11);
    tree1.add(2);
    tree1.add(3);
    tree1.add(4);
    tree1.add(11);
    tree1.add(6);
    tree1.add(7);
    tree1.add(8);
    tree1.add(9);
    tree1.add(11);

    const tree2 = new BinaryTree(42);
    tree2.add(1);
    tree2.add(2);
    tree2.add(3);
    tree2.add(4);
    tree2.add(5);
    tree2.add(6);
    tree2.add(7);
    tree2.add(8);
    tree2.add(9);
    tree2.add(10);

    const valueArr = treeIntersection(tree1, tree2);
    expect(valueArr).toEqual(["2", "3", "4", "6", "7", "8", "9"]);
  });

  test("Should not add values repeated in the second tree to the array", () => {
    const tree1 = new BinaryTree(150);
    tree1.add(1);
    tree1.add(2);
    tree1.add(3);
    tree1.add(4);
    tree1.add(5);
    tree1.add(6);
    tree1.add(7);
    tree1.add(8);
    tree1.add(9);
    tree1.add(10);

    const tree2 = new BinaryTree(42);
    tree2.add(11);
    tree2.add(2);
    tree2.add(3);
    tree2.add(4);
    tree2.add(11);
    tree2.add(6);
    tree2.add(7);
    tree2.add(8);
    tree2.add(9);
    tree2.add(11);

    const valueArr = treeIntersection(tree1, tree2);
    expect(valueArr).toEqual(["2", "3", "4", "6", "7", "8", "9"]);
  });
});
