class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  kthFromEnd(n) {
    let pointerOne = this.head;
    let pointerTwo = this.head;
    let count = 0;
    if (this.head === null) return "Linked list empty";
    if (n > this.length - 1) return "Exception";

    while (count < n + 1) {
      if (pointerOne === null) {
        return null;
      }
      pointerTwo = pointerTwo.next;
      count++;
    }
    if (pointerTwo != null) {
      while (pointerTwo != null) {
        pointerOne = pointerOne.next;
        pointerTwo = pointerTwo.next;
      }
    }
    return pointerOne.val;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

module.exports = SinglyLinkedList;
