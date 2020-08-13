const firstHasher = (item, capacity) => {
  let hash = 0;

  for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
    const char = item.charCodeAt(charIndex);
    hash = (hash << 5) + hash + char;
    hash &= hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }

  return hash % capacity;
}

const secondHasher = (item, capacity) => {
  let hash = 5381;

  for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
    const char = item.charCodeAt(charIndex);
    hash = (hash << 5) + hash + char; /* hash * 33 + c */
  }

  return Math.abs(hash % capacity);
}

const thirdHasher = (item, capacity) => {
  let hash = 0;

  for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
    const char = item.charCodeAt(charIndex);
    hash = (hash << 5) - hash;
    hash += char;
    hash &= hash; // Convert to 32bit integer
  }

  return Math.abs(hash % capacity);
}

const hashers = (val, capacity) => [
  firstHasher,
  secondHasher,
  thirdHasher
].map(h => h(val, capacity))

export default class BloomFilter {
  constructor({ capacity = 50 }) {
    // This is an important variable in the structure. A greater filter size lowers the rate of false positives
    this.capacity = capacity

    // The filter always starts out with all empty slots
    this.arr = Array(this.capacity).fill(false)
  }

  add(val) {
    const hashValues = hashers(val, this.capacity)

    hashValues.forEach(i => this.arr[i] = true)
  }

  maybeContains(val) {
    const hashValues = hashers(val, this.capacity)

    // The key here is that _all_ of the hash functions must match for it to be considered as contained.
    for (let hashIndex = 0; hashIndex < hashValues.length; hashIndex += 1) {
      if (!this.arr[hashValues[hashIndex]]) {
        return false;
      }
    }

    // The item may or may not have been inserted.
    return true
  }
}
