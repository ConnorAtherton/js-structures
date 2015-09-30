//
// Time travelling Hash
//

/**
 * Search through an array looking for an object with
 * the closest timestamp to an arbitrary timestamp value
 * passed in.
 *
 * IMPROVE
 * We could implement a better search here, currently it's a simple linear brute force
 *
 * @param {Array} arr - Array to search, takes format [{value:1, timestamp:1415338459470}, {value:3, timestamp:1415338459475}]
 * @param {Number} timestamp - Seconds since the epoch, this is the search value we are comparing against
 */
function timeTravel(arr, timestamp) {
  let length = arr.length
  let i = 0
  let before, after

  // Deal with simple case before we go loop de loop
  if (length === 1) { return arr[0].value }

  // Progress the reference until it finds an element that
  // is bigger than it. In that case, we check the difference
  // between the elements before and after to check which one
  // has the smallest difference, and therefor is closest to
  // our value.
  //
  // This works because we know that time
  // is always increasing and because we add new values to the
  // back of the array.
  //
  // Yay, time travel.
  for (; i < length && timestamp > arr[i].timestamp; i++) {}

  // This is in case the first element turns out to be the
  // one we want
  if (i === 0) { return arr[0].value }

  // two reason
  //  - gone past end
  //  - reached timestamp larger than us
  if (i === length) { return arr[length - 1].value }

  before = Math.abs(timestamp - arr[i - 1].timestamp)
  after = Math.abs(timestamp - arr[i].timestamp)

  return before < after ? arr[i - 1].value : arr[i].value
}

export default class TTHash {
  constructor() {
    if (!(this instanceof TTHash)) { return new TTHash(arguments) }
    this.store = {}
  }

  set(key, val) {
    if (!key || !val) { return null }

    this.store[key] = this.store[key] || []
    this.store[key].push({value: val, timestamp: Date.now()})
  }

  get(key, timestamp) {
    let last = this.store[key].length - 1

    return this.store[key]
      ? !timestamp
        ? timeTravel(this.store[key], timestamp)
        : this.store[key][last].value
      : null
  }
}
