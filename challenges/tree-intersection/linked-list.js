"use strict";

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  append(value) {
    let current = this.head;
    let newNode = new Node(value);
    if (!current) {
      current = newNode;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  insertBefore(searchValue, newValue) {
    let current = this.head;
    if (current.value === searchValue) this.insert(newValue);
    else {
      while (current.next !== null && current.next.value !== searchValue) {
        current = current.next;
      }
      if (current.next === null) throw new Error("Node not found");
      else {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  }

  insertAfter(searchValue, newValue) {
    let current = this.head;
    while (current.next !== null && current.value !== searchValue) {
      current = current.next;
    }
    if (current.next === null) throw new Error("Node not found");
    else {
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  kthFromEnd(k) {
    let current = this.head;
    let arr = [];
    for (let i = 0; i < k; i++) {
      arr[i] = null;
    }
    while (current !== null) {
      for (let i = arr.length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1];
      }
      arr[0] = current.value;
      current = current.next;
    }
    return arr[arr.length - 1]
      ? arr[arr.length - 1]
      : new Error("out of bounds exception");
  }

  zipLists(list2) {
    let currentOne = this.head;
    let currentTwo = list2.head;
    while (currentOne !== null && currentTwo !== null) {
      let next = currentOne.next;
      currentOne.next = currentTwo;
      currentOne = currentTwo;
      currentTwo = next;
    }
  }

  reverse() {
    let previous = this.head;
    let current = this.head.next;
    this.head.next = null;
    while (current !== null) {
      let temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    this.head = previous;
  }

  isPalindrome() {
    let arr = [];
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      arr[counter] = current.value;
      counter++;
      current = current.next;
    }
    current = this.head;
    let isPalindrome = true;
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] !== current.value) {
        isPalindrome = false;
        break;
      } else current = current.next;
    }
    return isPalindrome;
  }

  toString() {
    let current = this.head;
    let str = "";
    while (current !== null) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    str += "NULL";
    return str;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = SinglyLinkedList;
