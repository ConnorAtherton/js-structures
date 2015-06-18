function TTHash() {
  if(!(this instanceof TTHash))
    return new TTHash(arguments);

  this.store = {};
}

TTHash.prototype.set = function(key, val) {
  if (!key || !val) return undefined;

  var timestamp = Date.now();
  this.store[key] = this.store[key] || [];

  this.store[key].push({value: val, timestamp: timestamp})
};

/**
 * If no timestamp is given we just get the latest element.
 *
 * @param {String} key
 * @param {Number} timestamp {optional} - Seconds since the epoch, this is the search value we are comparing against
 */

TTHash.prototype.get = function(key, timestamp) {
  var last = this.store[key].length - 1;

  return this.store[key] ?
    timestamp !== (undefined || null) ?
      timeTravel(this.store[key], timestamp) : this.store[key][last].value : undefined;
};

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
  // I think this can be solved without storing
  // differences but I'm having fun with this so I want to leave it be.
  var length = arr.length;
  var i = 0;

  // Deal with simple case before we go loop de loop
  if (length === 1) return arr[0].value;

  while (i < length && timestamp > arr[i].timestamp) i++;

  // two reason
  //  - gone past end
  //  - reached timestamp larger than us
  if (i === length) return arr[length - 1].value;
  if (i === 0) return arr[0].value;

  var beforeDifference = Math.abs(timestamp - arr[i - 1].timestamp);
  var afterDifference = Math.abs(timestamp - arr[i].timestamp);

  return beforeDifference < afterDifference ? arr[i - 1].value : arr[i].value;

}

module.exports = TTHash;
