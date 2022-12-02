const { Node, SinglyLinkedList } = require("./singly-linked-list");
describe("linked list", () => {
  it("Can successfully instantiate an empty linked list", () => {
    expect(new SinglyLinkedList()).toEqual({
      head: null,
      tail: null,
      length: 0,
    });
  });

  it("Can properly insert into the linked list", () => {
    let testLL = new SinglyLinkedList();
    testLL.unshift("a");
    expect(testLL.length).toBe(1);
  });

  it("The head property will properly point to the first node in the linked list", () => {
    let testLL = new SinglyLinkedList();
    testLL.unshift("a");
    expect(testLL.head.val).toBe("a");
  });

  it("Can properly insert multiple nodes into tho linked list", () => {
    let testLL = new SinglyLinkedList();
    testLL.unshift("a");
    testLL.unshift("b");
    testLL.unshift("c");
    expect(testLL.length).toBe(3);
  });

  it("Will return true when finding a value within the the linked list that exist", () => {
    let testLL = new SinglyLinkedList();
    testLL.unshift("a");
    testLL.unshift("b");
    testLL.unshift("c");
    expect(testLL.search("b")).toBeTruthy();
  });

  it("Will return false when searching for value in the linked list that does not exist", () => {
    let testLL = new SinglyLinkedList();
    testLL.unshift("a");
    testLL.unshift("b");
    testLL.unshift("c");
    expect(testLL.search("x")).toBeFalsy();
  });

  it("Can properly return a collection of all the value that exist in the linked list", () => {
    let testLL = new SinglyLinkedList();
    testLL.unshift("a");
    testLL.unshift("b");
    testLL.unshift("c");
    expect(testLL.print()).toEqual(["c", "b", "a"]);
  });

  it("Can push a node to the end of a linked list", () => {
    let testLL = new SinglyLinkedList();
    testLL.push("a");
    testLL.push("b");
    testLL.push("c");
    expect(testLL.tail.val).toBe("c");
  });
});
