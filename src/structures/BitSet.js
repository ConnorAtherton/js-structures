//
// BitSet
//
// An Array (should be a Vector) of bits that grows as needed.
//
// Assume word length is 32bits. We store 1 word at each array index.
//
export default class BitSet {
  //
  //
  constructor(size) {
    // divide by 32
    size = size >> 5

    this.bitset = Array.apply(null, { length: size }).fill(0)
  }

  get(pos) {
    const word = pos >> 5 // divide by 32 to get index
    const bit = pos & 31 // mod 32
    const mask = 1 << bit

    return (this.bitset[word] & mask) !== 0
  }

  set(pos) {
    const word = pos >> 5 // divide by 32 to get index
    const bit = pos & 31 // mod 32
    const mask = 1 << bit

    this.bitset[word] |= mask
  }

  toString() {
    return this.bitset.map(num => ('0'.repeat(32) + num.toString(2)).substr(-32)).join('')
  }
}
