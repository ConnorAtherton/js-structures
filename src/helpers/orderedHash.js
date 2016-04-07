export default class OrderedHash {
  constructor() {
    this._keys = []
    this._values = {}
  }

  add(key, val) {
    // if this is a new key we want to add it to the end of the array
    if (!this.fetch(key)) { this._keys.push(key) }
    return this._values[key] = val
  }

  fetch(key) {
    return this._values[key]
  }

  get keys() {
    return this._keys
  }

  get values() {
    return this._values
  }
}
