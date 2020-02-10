

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.

class HashMap {

  constructor() {
    // Just to keep track of all actual keys in a fast way.
    this.keys = {}
    // Bucket
    this.bucket = [];
    this.defaultHashTableSize = 1000;
  }

  hash(key) {
    const reducer = (accumulator, symbol) => {
      return accumulator += symbol.charCodeAt(0) % this.defaultHashTableSize
    };
    return Array.from(key).reduce(reducer);
  }

  /**
   * Stores the item with its key.
   * @param key {number} The key relatives to the item.
   * @param item {*} The item to store.
   */
  insert(key, value) {
    const keyHash = this.hash(key);
    this.keys[keyHash] = keyHash;

    if (!this.bucket[keyHash]) {
      this.bucket[keyHash] = [];
    }
    this.bucket[keyHash].push([key, value]);
  }

  get (value){
    let keyHash = this.hash(value);
    let result = undefined;
    if (!this.bucket[keyHash])
      return result

    this.bucket[keyHash].forEach(obj => {
      if (obj[0] === value)
        result = obj[1]
    })

    return {key: keyHash, data: result}
  }

  length() {
    return this.bucket.length
  }

  getAllKeys() {
    return Object.keys(this.keys);
  }

  getKey() {
    return this.key;
  }

}

module.exports = HashMap;