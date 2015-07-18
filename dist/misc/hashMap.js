//
// HashMap
//
// let hmap = new HashMap
//
// hmap.set(1, 2)
// hmap.get(1) => 2
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
    _classCallCheck(this, HashMap);

    // The max size before we rehash all the keys
    this.maxSize = 150;

    // maximum number of collisions in one bucket before we rehash
    this.maxCollisions = 5;

    // allocate enough memory will all value set to undefined
    this.map = new Array(this.size);
  }

  _createClass(HashMap, [{
    key: 'set',
    value: function set(key, value) {
      if (!hasKey(key)) {
        this.keys.push(key);
      }

      hashed = HashMap.hash(key);
      existing = this.map[hashed];

      if (existing === undefined) {
        // new value for this bucket
        var tuplemap = new _tupleMap2['default'](key, value);
        existing.set(hashed, tuplemap);
      } else {
        // a key has already been added
        existing(key, value);

        if (existing.length > this.maxCollisions) {
          this._redistribute();
        }
      }
    }
  }, {
    key: 'get',
    value: function get(key) {
      hashed = HashMap.hash(key);
      existing = this.map[hashed];
      !existing ? undefined : existing.get(key);
    }
  }, {
    key: 'values',
    value: function values() {
      this.keys.map(function (key) {
        return this.map[HashMap.hash(key)].get(key);
      });
    }
  }, {
    key: '_deleteKey',

    //
    // Private
    //

    // deletes a key from the internal keys array
    value: function _deleteKey(key) {
      var index = this.keys.indexOf(key);
      this.keys = index === -1 ? this.keys : this.keys.slice(index, 1);
    }
  }, {
    key: '_redistribute',

    // When we hit maxSize for the whole hash or
    // maxCollisions for one key then we need to increase
    // the has size and redistribute everything.
    //
    // We double the previous size and find the next prime number after
    // that to reduce the chances of conflicts.
    value: function _redistribute() {
      new_size = this._nextMaxSize;
      // return a new instance with a higher max size
      newInstance = new HashMap();
      newInstance.maxSize = new_size;

      for (var i = 0, len = this.keys.length; i < len; i++) {
        newInstance.set(value);
      }
    }
  }, {
    key: '_nextMaxSize',
    value: function _nextMaxSize() {}
  }], [{
    key: 'hash',

    // needs to be deterministic
    // and returns an integer between 0 and map.length - 1
    value: function hash(key) {
      // TODO: hashed value
      hashed = hashValue(key);
      return hashed % this.maxSize;
    }
  }]);

  return HashMap;
})();

exports['default'] = HashMap;
module.exports = exports['default'];

// TODO: prime number generator