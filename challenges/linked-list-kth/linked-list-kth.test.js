const SinglyLinkedList = require("./linked-list-kth");

describe("linked list kth", () => {
  let newLL = new SinglyLinkedList();
  newLL.push(1);
  newLL.push(3);
  newLL.push(8);
  newLL.push(2);
  it("should return 2, given 0", () => {
    expect(newLL.kthFromEnd(0)).toBe(2);
  });

  it("should return 3, given 2", () => {
    expect(newLL.kthFromEnd(2)).toBe(3);
  });

  it("should return Exception, given 6", () => {
    expect(newLL.kthFromEnd(6)).toBe("Exception");
  });
});
