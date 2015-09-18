//
// TupleMap
//
// [
//   ['key1', 'val1'],
//   ['key2', 'val2']
// ]
//
export default class TupleMap {
  constructor() {
    this.store = []
  }

  get(key) {
    return (this.findTuple(key) || [])[1]
  }

  set(key, val) {
    let tuple = this.findTuple(key)

    if (tuple) {
      tuple[1] = val
    } else {
      this.store.push([key, val])
    }
  }

  keys() {
    return this.store.map(tuple => tuple[0])
  }

  values() {
    return this.store.map(tuple => tuple[1])
  }

  hasKey(key) {
    return (this.keys.indexOf(key) !== -1)
  }

  deleteKey(key) {
    // this sucks because we have to loop through
    // every element even when we have found it
    let tuple = this.findTuple(key)
    let index = this.store.indexOf(tuple)

    if (index) { this.store.slice(index, 1) }
  }

  length() {
    return this.store.length
  }

  findTuple(key) {
    return this.store.find(tuple => tuple[0] === key)
  }
}
