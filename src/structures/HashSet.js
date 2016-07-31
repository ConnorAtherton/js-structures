import HashMap from './HashMap'

//
// HashSet
//
// Implementation of a Set ADT interface.
//
// TODO: If we are inserting reference types they should implement the *equals* and *hashValue*
// methods.
//
export default class HashSet {
  constructor() {
    this.map = new HashMap
  }

  insert(val) {
    if (this.contains(val)) {
      return false
    }

    this.map.set(val, null)

    return true
  }

  contains(val) {
    return this.map.get(val) === null
  }

  remove(val) {
    this.map.deleteKey(val)
  }

  values() {
    return this.map.keys
  }
}

