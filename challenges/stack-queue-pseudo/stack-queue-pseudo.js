// const {Stack} = require('../../data-structures/stack-and-queue/stack')

class PseudoQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(val) {
    // Move all elements from s1 to s2
    while (this.s1.length != 0) {
      this.s2.push(this.s1.pop());
      //s1.pop();
    }

    // Push item into s1
    this.s1.push(val);

    // Push everything back to s1
    while (this.s2.length != 0) {
      this.s1.push(this.s2.pop());
      //s2.pop();
    }
  }

  // Dequeue an item from the queue
  deQueue() {
    // If first stack is empty
    if (this.s1.length == 0) {
      document.write("Queue is Empty");
    }

    // Return top of s1
    let top = this.s1[this.s1.length - 1];
    this.s1.pop();
    return top;
  }
}

module.exports = PseudoQueue;
