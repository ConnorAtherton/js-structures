//
// TupleMap
//
// [
//   ['key1', 'val1'],
//   ['key2', 'val2']
// ]
//
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TupleMap = (function () {
  function TupleMap() {
    _classCallCheck(this, TupleMap);

    this.store = [];
  }

  _createClass(TupleMap, [{
    key: "get",
    value: function get(key) {
      return (this._findTuple(key) || [])[1];
    }
  }, {
    key: "set",
    value: function set(key, val) {
      var tuple = this._findTuple(key);

      if (tuple) {
        tuple[1] = valu;
      } else {
        this.store.push([key, val]);
      }
    }
  }, {
    key: "keys",
    value: function keys() {
      return this.store.map(function (tuple) {
        return tuple[0];
      });
    }
  }, {
    key: "values",
    value: function values() {
      return this.store.map(function (tuple) {
        return tuple[1];
      });
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      return this.keys.indexOf(key) !== -1;
    }
  }, {
    key: "length",
    value: function length() {
      return this.store.length;
    }
  }, {
    key: "_findTuple",
    value: function _findTuple(key) {
      return this.store.find(function (tuple) {
        return tuple[0] === key;
      });
    }
  }]);

  return TupleMap;
})();

exports["default"] = TupleMap;
module.exports = exports["default"];