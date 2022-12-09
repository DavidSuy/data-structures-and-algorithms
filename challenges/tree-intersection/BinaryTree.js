"use strict";

const Stack = require("./stack");
const Queue = require("./queue");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  contains(key) {
    if (this.root.value === key) return true;
    const stack = new Stack();
    stack.push(this.root);
    while (!stack.isEmpty()) {
      let node = stack.pop();
      if (node.right) {
        if (node.right.value === key) return true;
        stack.push(node.right);
      }
      if (node.left) {
        if (node.left.value === key) return true;
        stack.push(node.left);
      }
    }
    return false;
  }

  add(value) {
    const newNode = new Node(value);
    const queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      if (node.value.left) queue.enqueue(node.value.left);
      else {
        node.value.left = newNode;
        break;
      }
      if (node.value.right) queue.enqueue(node.value.right);
      else {
        node.value.right = newNode;
        break;
      }
    }
  }

  getMax() {
    let max = this.root.value;
    const stack = new Stack();
    stack.push(this.root);
    while (!stack.isEmpty()) {
      const node = stack.pop();
      if (node.right) {
        if (node.right.value > max) max = node.right.value;
        stack.push(node.right);
      }
      if (node.left) {
        if (node.left.value > max) max = node.left.value;
        stack.push(node.left);
      }
    }
    return max;
  }

  getHeight() {
    let countHeight = 0;
    let height = 0;
    const stack = new Stack();
    stack.push(this.root);
    while (!stack.isEmpty()) {
      const currNode = stack.pop();
      if (currNode.right || currNode.left) {
        countHeight++;
      } else {
        if (countHeight > height) height = countHeight;
        countHeight = 0;
      }

      if (currNode.right) stack.push(currNode.right);
      if (currNode.left) stack.push(currNode.left);
    }
    return height;
  }

  toString() {
    const queue = new Queue();
    queue.enqueue(this.root);
    let str = `${this.root.value} `;
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      if (node.value.left) {
        str = `${str}${node.value.left.value} `;
        queue.enqueue(node.value.left);
      }
      if (node.value.right) {
        str = `${str}${node.value.right.value} `;
        queue.enqueue(node.value.right);
      }
    }
    return str;
  }
}

module.exports = BinaryTree;
