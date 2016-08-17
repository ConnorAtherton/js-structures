//
// BitSet
//
// An Array (should be a Vector) of bits that grows as needed.
//
export default class BitSet {
  //
  // Each element will be an integer holding 32 possible bit flags.
  //
  // TODO: Make this configurable.
  //
  constructor() {
    this.bitset = Array.apply(null, { length: 32 }).fill(0)
  }

  get(pos) {
    const element = pos >> 5
    const bit = pos % 32

    return (this.bitset[element] & (1 << bit) === 1)
  }

  set(pos) {
    const element = pos >> 5
    const bit = pos % 32

    this.bitset[element] |= (1 << bit)
  }

  clear(pos) {

  }

  toString() {
    return this.bitset.join('')
  }
}
