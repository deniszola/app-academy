const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    // Your code here
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const modKey = this.hashMod(key);

    if (this.data[modKey]) {
      throw new Error("hash collision or same key/value pair already exists!");
    }

    this.data[modKey] = new KeyValuePair(key, value);
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const keyValuePair = new KeyValuePair(key, value);
    const modKey = this.hashMod(key);

    if (this.data[modKey]) keyValuePair.next = this.data[modKey];

    this.data[modKey] = keyValuePair;
    this.count++;
  }

  insert(key, value) {
    // Your code here
    const keyValuePair = new KeyValuePair(key, value);
    const modKey = this.hashMod(key);

    if (this.data[modKey]) {
      let current = this.data[modKey];

      do {
        if (current.key === key) {
          current.value = value;
          return;
        }

        current = current.next;
      } while (current);

      keyValuePair.next = this.data[modKey];
    }

    this.data[modKey] = keyValuePair;
    this.count++;
  }
}

module.exports = HashTable;
