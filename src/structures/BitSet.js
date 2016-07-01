//
// BitSet
//
export default class BitSet {
  constructor(size) {
    // Each element will be an integer holding 32 possible bit
    // flags
    this.bitset = new Array(size >> 5)
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
}
