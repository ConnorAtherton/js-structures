//
// TupleMap
//
// [
//   ['key1', 'val1'],
//   ['key2', 'val2']
// ]
//
export default class TupleMap {
  constructor(){
    this.store = []
  }

  get(key) {
    return (this._findTuple(key) || [])[1]
  }

  set(key, val) {
    let tuple = this._findTuple(key)

    if (tuple) {
      tuple[1] = valu
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

  length() {
    return this.store.length
  }

  _findTuple(key) {
    return this.store.find(tuple => tuple[0] === key)
  }
}
