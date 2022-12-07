const {
  Node,
  SinglyLinkedList,
} = require("../../data-structures/linked-list/singly-linked-list");
const zipLists = require("./linked-list-zip");

describe("linked list kth", () => {
  it("Should return {1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null, when given {1} -> {3} -> {2} -> null and {5} -> {9} -> {4} -> null", () => {
    let ll1 = new SinglyLinkedList();
    let ll2 = new SinglyLinkedList();
    ll1.push(1);
    ll1.push(3);
    ll1.push(2);

    ll2.push(5);
    ll2.push(9);
    ll2.push(4);
    let newLL = zipLists(ll1, ll2);
    expect(newLL.print()).toEqual([1, 5, 3, 9, 2, 4]);
  });

  it("Should return {1} -> {5} -> {3} -> {9} -> {4} -> null, when given {1} -> {3} -> null and {5} -> {9} -> {4} -> null", () => {
    let ll1 = new SinglyLinkedList();
    let ll2 = new SinglyLinkedList();
    ll1.push(1);
    ll1.push(3);

    ll2.push(5);
    ll2.push(9);
    ll2.push(4);
    let newLL = zipLists(ll1, ll2);
    expect(newLL.print()).toEqual([1, 5, 3, 9]);
  });

  it("Should return {1} -> {5} -> {3} -> {9} -> {2} -> null, when given {1} -> {3} -> {2} -> null and {5} -> {9} -> null", () => {
    let ll1 = new SinglyLinkedList();
    let ll2 = new SinglyLinkedList();
    ll1.push(1);
    ll1.push(3);
    ll1.push(2);

    ll2.push(5);
    ll2.push(9);
    let newLL = zipLists(ll1, ll2);
    expect(newLL.print()).toEqual([1, 5, 3, 9, 2]);
  });
});
