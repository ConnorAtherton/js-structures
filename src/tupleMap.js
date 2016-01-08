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

  get length() {
    return this.store.length
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

  get keys() {
    return this.store.map(tuple => tuple[0])
  }

  get values() {
    return this.store.map(tuple => tuple[1])
  }

  hasKey(key) {
    return (this.keys.indexOf(key) !== -1)
  }

  deleteKey(key) {
    let index = this.store.findIndex(tuple => tuple[0] === key)
    if (index !== -1) { this.store.splice(index, 1) }
  }

  findTuple(key) {
    return this.store.find(tuple => tuple[0] === key)
  }
}
