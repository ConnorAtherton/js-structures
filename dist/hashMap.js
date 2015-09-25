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
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _tupleMap = require('./tupleMap');

var _tupleMap2 = _interopRequireDefault(_tupleMap);

var HashMap = (function () {
  function HashMap() {
    var maxSize = arguments[0] === undefined ? HashMap.maxSize : arguments[0];

    _classCallCheck(this, HashMap);

    // we save this because we will need to bump it up if we
    // get too many collisions
    this.maxSize = maxSize;

    // allocate enough memory will all value set to undefined
    this.map = new Array(this.maxSize);

    // holds all of our keys. Helps to avoid
    // hashing in cases where we don't have that key
    this.keys = [];
  }

  _createClass(HashMap, [{
    key: 'hasKey',
    value: function hasKey(key) {
      return this.keys.indexOf(key) !== -1 ? true : false;
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      if (!this.hasKey(key)) {
        this.keys.push(key);
      }

      // get position the key belongs in the array
      var position = this.hash(key);
      var tupleMap = this.map[position] || new _tupleMap2['default']();

      tupleMap.set(key, value);

      // If it's not already set then set it
      if (!this.map[position]) {
        this.map[position] = tupleMap;
      }

      if (tupleMap.length > HashMap.maxCollisions) {
        this.redistribute();
      }
    }
  }, {
    key: 'get',
    value: function get(key) {
      var position = this.hash(key);
      var tupleMap = this.map[position];
      return !tupleMap ? null : tupleMap.get(key);
    }
  }, {
    key: 'deleteKey',

    // deletes a key from our hashmap
    value: function deleteKey(key) {
      console.log(this.keys);
      if (!this.hasKey(key)) {
        return false;
      }

      var position = this.hash(key);

      this.keys.splice(this.keys.indexOf(key), 1);
      this.map[position].deleteKey(key);
    }
  }, {
    key: 'values',
    value: function values() {
      var _this = this;

      return this.keys.map(function (key) {
        return _this.map[_this.hash(key)].get(key);
      });
    }
  }, {
    key: 'hash',

    //
    // Private
    //

    // needs to be deterministic
    // and returns an integer between 0 and map.length - 1
    value: function hash(key) {
      var hashed = HashMap.hashValue(key);
      return hashed % this.maxSize;
    }
  }, {
    key: 'redistribute',

    // When we hit maxSize for the whole hash or
    // maxCollisions for one key then we need to increase
    // the has size and redistribute everything.
    value: function redistribute() {
      var _this2 = this;

      var newSize = this.nextMaxSize;
      // return a new instance with a higher max size
      var newInstance = new HashMap(newSize);

      // rehash all of our value to the new size
      this.keys.forEach(function (key) {
        newInstance.set(key, _this2.get(key));
      });

      // finally replace with the new values
      this.map = newInstance.map;

      // and update our max size
      this.maxSize = newSize;
    }
  }, {
    key: 'nextMaxSize',

    // We double the previous size and find the next prime number after
    // that to reduce the chances of conflicts.
    value: function nextMaxSize() {}
  }], [{
    key: 'hashValue',

    //
    // Class methods
    //

    // We limit the keys to only be string values.
    // I don't know how good this is at avoiding
    // collisions but it's worth a try
    value: function hashValue(key) {
      // NOTE: we choose 31 because it is a prime
      // and because researchers have shown that it
      // generates less collisions than other values. The
      // exact reason for this behaviour is unknown.
      var hashPrime = 31;
      var hash = 0;

      for (var i = 0; i < key.length; i++) {
        hash += Math.pow(key.charCodeAt(i), hashPrime);
      }

      return hash;
    }
  }, {
    key: 'maxSize',

    //
    // Hack statics
    //
    // The max size before we rehash all the keys
    get: function get() {
      return 31;
    }
  }, {
    key: 'maxCollisions',

    // maximum number of collisions in one bucket before we rehash
    get: function get() {
      return 5;
    }
  }]);

  return HashMap;
})();

exports['default'] = HashMap;
module.exports = exports['default'];

// TODO: prime number generator