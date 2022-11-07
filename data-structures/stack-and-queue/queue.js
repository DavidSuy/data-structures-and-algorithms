class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(val) {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  peek() {
    return this.first;
  }
  isEmpty() {
    if (this.first === null && this.last === null) {
      return true;
    }
    return false;
  }
}

let testQueue = new Queue();

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4);
console.log(testQueue.dequeue());
console.log(testQueue.dequeue());
console.log(testQueue.isEmpty());
console.log(testQueue.dequeue());
console.log(testQueue.peek());
console.log(testQueue.dequeue());
console.log(testQueue.isEmpty());
console.log(testQueue);
