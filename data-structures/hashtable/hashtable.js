const LinkedList = require("./linked-list");

const finder =
  (findKey) =>
  ([key, value]) =>
    key === findKey;

class Bucket {
  constructor() {
    this.list = new LinkedList();
  }

  replace([key, value]) {
    this.list.replace(finder(key), [key, value]);
  }

  add([key, value]) {
    this.list.unshift([key, value]);
  }

  find(key) {
    const value = this.list.find(finder(key));
    if (value) return value[1];
    else return null;
  }

  all() {
    return this.list.items();
  }
}

class Hashtable {
  constructor(len) {
    this.arr = [];
    this.len = len || 10;
  }

  hash(key) {
    if (typeof key === "string") {
      return key.charCodeAt(0) % this.len;
    } else if (typeof key === "number") {
      return Math.floor(key) % this.len;
    }
  }

  set(key, value) {
    const hashKey = this.hash(key);
    let bucket;
    if (this.arr[hashKey]) {
      bucket = this.arr[hashKey];
    } else {
      bucket = new Bucket();
      this.arr[hashKey] = bucket;
    }
    bucket.add([key, value]);
  }

  get(key) {
    const hashKey = this.hash(key);
    const bucket = this.arr[hashKey];
    if (bucket) {
      const value = bucket.find(key);
      return value;
    } else {
      return null;
    }
  }

  has(key) {
    const value = this.get(key);
    return Boolean(value);
  }

  all() {
    const allItems = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i]) {
        allItems.push(...Array.from(this.arr[i].all()));
      }
    }
    return allItems;
  }
}

module.exports = { Hashtable };
