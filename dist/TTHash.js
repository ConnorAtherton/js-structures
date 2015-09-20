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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function timeTravel(arr, timestamp) {
  var length = arr.length;
  var i = 0;
  var before = undefined,
      after = undefined;

  // Deal with simple case before we go loop de loop
  if (length === 1) {
    return arr[0].value;
  }

  while (i < length && timestamp > arr[i].timestamp) {
    i++;
  }

  // two reason
  //  - gone past end
  //  - reached timestamp larger than us
  if (i === length) {
    return arr[length - 1].value;
  }
  // if (i === 0) return arr[0].value;

  before = Math.abs(timestamp - arr[i - 1].timestamp);
  after = Math.abs(timestamp - arr[i].timestamp);

  return before < after ? arr[i - 1].value : arr[i].value;
}

var TTHash = (function () {
  function TTHash() {
    _classCallCheck(this, TTHash);

    if (!(this instanceof TTHash)) {
      return new TTHash(arguments);
    }
    this.store = {};
  }

  _createClass(TTHash, [{
    key: "set",
    value: function set(key, val) {
      if (!key || !val) {
        return null;
      }

      var timestamp = Date.now();
      this.store[key] = this.store[key] || [];
      this.store[key].push({ value: val, timestamp: timestamp });
    }
  }, {
    key: "get",
    value: function get(key, timestamp) {
      var last = this.store[key].length - 1;

      return this.store[key] ? !timestamp ? timeTravel(this.store[key], timestamp) : this.store[key][last].value : null;
    }
  }]);

  return TTHash;
})();

exports["default"] = TTHash;
module.exports = exports["default"];