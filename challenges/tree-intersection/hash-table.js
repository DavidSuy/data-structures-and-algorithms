"use strict";

const LinkedList = require("./linked-list");

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // return a hash value for the provided key
  hash(key) {
    let sum = 0;
    if (typeof key === "string") {
      for (let i in key) {
        sum += key.charCodeAt(i);
      }
      return (sum * 599) % this.size;
    } else {
      return null;
    }
  }

  // places a value into our Hash Table by hashing our key, and setting our value into that BUcket of the table
  set(key, value) {
    const hash = this.hash(key);
    if (hash) {
      let list = this.table[hash];
      if (!list) {
        list = new LinkedList();
        this.table[hash] = list;
      }
      list.insert(`${key}:${value}`);
    }
  }

  // returns the value stored in the bucket associated with the key parameter
  get(key) {
    const hash = this.hash(key);
    let value = null;
    if (hash) {
      const list = this.table[hash];
      if (list) {
        let current = list.head;
        while (current && !value) {
          const currentKey = current.value.split(":")[0];
          if (currentKey === key) value = current.value.split(":")[1];
          else current = current.next;
        }
      }
    }
    return value;
  }

  // returns a boolean for if the key exists in the list
  has(key) {
    const hash = this.hash(key);
    if (hash) {
      let list = this.table[hash];
      if (list) {
        let current = list.head;
        while (current) {
          const currentKey = current.value.split(":")[0];
          if (currentKey === key) return true;
          else current = current.next;
        }
      }
    }
    return false;
  }

  // returns an array of all the keys in the table
  keys() {
    const keyArray = [];
    for (let list of this.table) {
      if (list) {
        let current = list.head;
        while (current) {
          keyArray.push(current.value.split(":")[0]);
          current = current.next;
        }
      }
    }
    return keyArray;
  }
}

module.exports = HashTable;
