"use strict";

const Queue = require("./queue");
const HashTable = require("./hash-table");

function treeIntersection(tree1, tree2) {
  const hashTable = new HashTable(1024);
  const intersectionArr = [];

  traverse(tree1, (value) => {
    hashTable.set(value, value);
  });

  traverse(tree2, (value) => {
    if (hashTable.has(value)) intersectionArr.push(value);
  });

  return intersectionArr;
}

function traverse(tree, callback) {
  const queue = new Queue();
  queue.enqueue(tree.root);
  while (!queue.isEmpty()) {
    const node = queue.dequeue().value;
    callback(String(node.value));
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }
}

module.exports = treeIntersection;
