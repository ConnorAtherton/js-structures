//
// HashMap
//
// let hmap = new HashMap
//
// hmap.set(1, 2)
// hmap.get(1) => 2
//
// Doesn't work yet.
//
import TupleMap from './tupleMap'

export default class HashMap {
  //
  // Hack statics
  //
  // The max size before we rehash all the keys
  static get maxSize() { return 150 }
  // maximum number of collisions in one bucket before we rehash
  static get maxCollisions() { return 15 }

  constructor(maxSize = HashMap.masSize) {
    // we save this because we will need to bump it up if we
    // get too many collisions
    this.maxSize = maxSize

    // allocate enough memory will all value set to undefined
    this.values = new Array(HashMap.maxSize)

    // holds all of our keys. Helps to avoid
    // hashing in cases where we don't have that key
    this.keys = []
  }

  hasKey(key) {
    if (!this.keys.indexOf(key) !== -1) { return false }

//     let position = this.hash(position)
//     let tupleMap = this.map[position]

//     // return if we have no value
//     if (!tupleMap) { return false }

//     // search through tuplemap keys for a match
//     return tupleMap.keys().indexOf(key) !== -1
  }

  set(key, value) {
    if (!this.hasKey(key)) {
      this.keys.push(key)
    }

    // get position the key belongs in the array
    let position = this.hash(key)
    let tupleMap = this.map[position]

    if (typeof tupleMap === 'undefined') {
      // new value for this bucket so add the tuplemap
      let initial = new TupleMap(key, value)
      tupleMap.set(key, initial)
    } else {
      // a key has already been added so add the key to
      // the tuplemap at that position
      tupleMap.set(key, value)

      if (tupleMap.length > HashMap.maxCollisions) {
        this.redistribute()
      }
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
    this.values[position].deleteKey(key)
  }

  values() {
    this.keys.map(key => {
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
    this.values = newInstance.values

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
    // use a prime number
    const hash = 7

    for (let i = 0; i < key.length; i++) {
      hash = hash * 31 + key.charAt(i)
    }

    return hash
  }
}

