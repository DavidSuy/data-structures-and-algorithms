class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop(val) {
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

let x = new Stack();
x.push("hello");
x.push("world");
x.push("My");
console.log(x.peek());
x.push("name");
x.push("is");
console.log(x.isEmpty());
x.push("David");
console.log(x.pop());
console.log(x.pop());
console.log(x.peek());
console.log(x.pop());
console.log(x.pop());
console.log(x.pop());
console.log(x.pop());
console.log(x.peek());
console.log(x.isEmpty());

console.log(x);
