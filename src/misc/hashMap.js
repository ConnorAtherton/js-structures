//
// HashMap
//
// let hmap = new HashMap
//
// hmap.set(1, 2)
// hmap.get(1) => 2
//
import TupleMap from './tupleMap'

export default class HashMap {
  constructor(){
    // The max size before we rehash all the keys
    this.maxSize = 150

    // maximum number of collisions in one bucket before we rehash
    this.maxCollisions = 5

    // allocate enough memory will all value set to undefined
    this.map = new Array(this.size)
  }

  set(key, value) {
    if (!hasKey(key)) {
      this.keys.push(key)
    }

    hashed = HashMap.hash(key)
    existing = this.map[hashed]

    if (existing === undefined) {
      // new value for this bucket
      let tuplemap = new TupleMap(key, value)
      existing.set(hashed, tuplemap)
    } else {
      // a key has already been added
      existing(key, value)

      if (existing.length > this.maxCollisions) {
        this._redistribute()
      }
    }
  }

  get(key) {
    hashed = HashMap.hash(key)
    existing = this.map[hashed]
    !existing ? undefined : existing.get(key)
  }

  values() {
    this.keys.map(function(key) {
      return this.map[HashMap.hash(key)].get(key)
    })
  }

  //
  // Private
  //

  // deletes a key from the internal keys array
  _deleteKey(key) {
    let index = this.keys.indexOf(key)
    this.keys = index === -1 ? this.keys : this.keys.slice(index, 1)
  }

  // needs to be deterministic
  // and returns an integer between 0 and map.length - 1
  static hash(key) {
    // TODO: hashed value
    hashed = hashValue(key)
    return hashed % this.maxSize
  }

  // When we hit maxSize for the whole hash or
  // maxCollisions for one key then we need to increase
  // the has size and redistribute everything.
  //
  // We double the previous size and find the next prime number after
  // that to reduce the chances of conflicts.
  _redistribute() {
    new_size = this._nextMaxSize
    // return a new instance with a higher max size
    newInstance = new HashMap
    newInstance.maxSize = new_size

    for (var i = 0, len = this.keys.length; i < len; i++) {
      newInstance.set(value)
    }
  }

  _nextMaxSize() {
    // TODO: prime number generator
  }
}

