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
  //
  // Hack statics
  //
  // The max size before we rehash all the keys
  static get maxSize() { return 31 }
  // maximum number of collisions in one bucket before we rehash
  static get maxCollisions() { return 5 }

  constructor(maxSize = HashMap.maxSize) {
    // we save this because we will need to bump it up if we
    // get too many collisions
    this.maxSize = maxSize

    // NOTE: The Array constructor doesn't need **new** and passing
    // a value doesn't actually fill the slots, it just sets the length
    // property to that value and the values are essentially *empty slots*
    //
    // allocate enough memory will all value set to undefined
    //
    // Will create empty slots with values =>
    // this.map = new Array(this.maxSize)
    //
    // Will create all undefined valyes because the obj is spread =>
    this.map = Array.apply(null, { length: this.maxSize })

    // holds all of our keys. Helps to avoid
    // hashing in cases where we don't have that key
    this.keys = []
  }

  hasKey(key) {
    return this.keys.indexOf(key) !== -1 ? true : false
  }

  set(key, value) {
    if (!this.hasKey(key)) {
      this.keys.push(key)
    }

    // get position the key belongs in the array
    let position = this.hash(key)
    let tupleMap = this.map[position] || new TupleMap()

    tupleMap.set(key, value)

    // If it's not already set then set it
    if (!this.map[position]) {
      this.map[position] = tupleMap
    }

    if (tupleMap.length > HashMap.maxCollisions) {
      this.redistribute()
    }
  }

  get(key) {
    let position = this.hash(key)
    let tupleMap = this.map[position]
    return (!tupleMap ? null : tupleMap.get(key))
  }

  // deletes a key from our hashmap
  deleteKey(key) {
    if (!this.hasKey(key)) { return false }

    let position = this.hash(key)

    this.keys.splice(this.keys.indexOf(key), 1)
    this.map[position].deleteKey(key)
  }

  values() {
    return this.keys.map(key => {
      return this.map[this.hash(key)].get(key)
    })
  }

  //
  // Private
  //

  // needs to be deterministic
  // and returns an integer between 0 and map.length - 1
  hash(key) {
    let hashed = HashMap.hashValue(key)
    return hashed % this.maxSize
  }

  // When we hit maxSize for the whole hash or
  // maxCollisions for one key then we need to increase
  // the has size and redistribute everything.
  redistribute() {
    let newSize = this.nextMaxSize
    // return a new instance with a higher max size
    let newInstance = new HashMap(newSize)

    // rehash all of our value to the new size
    this.keys.forEach(key => {
      newInstance.set(key, this.get(key))
    })

    // finally replace with the new values
    this.map = newInstance.map

    // and update our max size
    this.maxSize = newSize
  }

  // We double the previous size and find the next prime number after
  // that to reduce the chances of conflicts.
  nextMaxSize() {
    // TODO: prime number generator
  }

  //
  // Class methods
  //

  // We limit the keys to only be string values.
  // I don't know how good this is at avoiding
  // collisions but it's worth a try
  static hashValue(key) {
    // NOTE: we choose 31 because it is a prime
    // and because researchers have shown that it
    // generates less collisions than other values. The
    // exact reason for this behaviour is unknown.
    const hashPrime = 31
    let hash = 0

    for (let i = 0; i < key.length; i++) {
      hash += Math.pow(key.charCodeAt(i), hashPrime)
    }

    return hash
  }
}

