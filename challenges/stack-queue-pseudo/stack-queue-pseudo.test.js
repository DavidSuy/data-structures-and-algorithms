const PseudoQueue = require("./stack-queue-pseudo");

describe("PseudoQueue", () => {
  it("Should return [5], if enqueue with 5", () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enQueue(5);
    expect(pseudoQueue.s1).toEqual([5]);
  });

  let pseudoQueue = new PseudoQueue();
  pseudoQueue.enQueue(20);
  pseudoQueue.enQueue(15);
  pseudoQueue.enQueue(10);

  it("Should return [5]->[10]->[15]->[20], if enqueue with 5", () => {
    pseudoQueue.enQueue(5);
    expect(pseudoQueue.s1).toEqual([5, 10, 15, 20]);
  });

  it("Should return 20, if dequeue", () => {
    expect(pseudoQueue.deQueue()).toBe(20);
  });

  it("Should return 15, if dequeue", () => {
    expect(pseudoQueue.deQueue()).toBe(15);
  });
});
