/**
 * DHash
 *
 * A destructive hash where
 * a key can only be fetched a
 * maximum of once.
 */
export default class DHash {
  constructor() {
    this.store = {}
  }

  get(key, setter) {
    if (this.store[key]) {
      var value = this.store[key]
      delete this.store[key]
      return value
    }

    // TODO: check if this is a fn or value
    return (setter ? (this.store[key] = setter()) : null)
  }

  set(key, value) {
    if (key && value) { return (this.store[key] = value) }
  }

  flush() {
    delete this.store
    return (this.store = {})
  }
}

