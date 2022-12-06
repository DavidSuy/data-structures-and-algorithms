const { Node, Queue } = require("./queue");
const { Stack } = require("./stack");

describe("Stacks and Queues", () => {
  let newStack = new Stack();

  it("Can successfully push onto a stack", () => {
    newStack.push(1);
    expect(newStack.first.value).toBe(1);
  });

  it("Can successfully push multiple values onto a stack", () => {
    newStack.push(2);
    newStack.push(3);
    expect(newStack.size).toBe(3);
  });

  it("Can successfully pop off the stack", () => {
    expect(newStack.pop()).toBe(3);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    newStack.pop();
    newStack.pop();
    expect(newStack.size).toBe(0);
  });

  it("Can successfully peek the next item on the stack", () => {
    newStack.push(1);
    newStack.push(2);
    expect(newStack.peek().value).toBe(2);
  });

  it("Can successfully instantiate an empty stack", () => {
    expect(new Stack().size).toBe(0);
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    let stack = new Stack();
    expect(stack.peek()).toBe(null);
  });

  let queue = new Queue();

  it("Can successfully enqueue into a queue", () => {
    expect(queue.enqueue(1)).toBe(1);
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    queue.enqueue(2);
    expect(queue.enqueue(3)).toBe(3);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    expect(queue.dequeue()).toBe(1);
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    expect(queue.peek().value).toBe(2);
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

  it("Can successfully instantiate an empty queue", () => {
    newQueue = new Queue();
    expect(newQueue.size).toBe(0);
  });

  it("Calling dequeue or peek on empty queue raises exception", () => {
    expect(queue.dequeue()).toBe(null);
  });
});
