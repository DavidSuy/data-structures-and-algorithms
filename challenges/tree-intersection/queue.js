"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
    } else if (!this.rear) {
      this.rear = newNode;
      this.front.next = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    const temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp;
  }

  peek() {
    if (this.isEmpty()) return null;
    else return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }

  toString() {
    let current = this.front;
    let str = "FRONT -> ";
    while (current !== null) {
      str = `${str}{ ${current.value} } -> `;
      current = current.next;
    }
    str += "REAR";
    return str;
  }
}

module.exports = Queue;
