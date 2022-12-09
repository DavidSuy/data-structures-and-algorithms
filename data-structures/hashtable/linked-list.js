class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  unshift(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      const temp = new Node(value);
      temp.next = this.head;
      this.head = temp;
    }
  }

  find(findFn) {
    let done = false;
    let node = this.head;
    while (!done) {
      if (node) {
        if (findFn(node.value)) {
          done = true;
          return node.value;
        } else {
          node = node.next;
        }
      } else {
        done = true;
      }
    }
  }

  replace(findFn, value) {
    let done = false;
    let node = this.head;
    while (!done) {
      if (node) {
        if (findFn(node.value)) {
          done = true;
          node.value = value;
          return value;
        } else {
          node = node.next;
        }
      } else {
        done = true;
      }
    }
  }

  removeNode(prevNode, node) {
    if (node === this.head) {
      this.head = this.head.next;
      return node.value;
    } else {
      prevNode.next = node.next;
      return node.value;
    }
  }

  remove(findFn) {
    let done = false;
    let prevNode = null;
    let node = this.head;
    while (!done) {
      if (node) {
        if (findFn(node.value)) {
          done = true;
          return this.removeNode(prevNode, node);
        } else {
          prevNode = node;
          node = node.next;
        }
      } else {
        done = true;
      }
    }
  }

  items() {
    const list = this;
    let node = list.head;
    return {
      *[Symbol.iterator]() {
        while (node) {
          yield node.value;
          node = node.next;
        }
      },
    };
  }
}

module.exports = LinkedList;
