/**
 * DHash
 *
 * A destructive hash where
 * a key can only be fetched a
 * maximum of once.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DHash = (function () {
  function DHash() {
    _classCallCheck(this, DHash);

    this.store = {};
  }

  _createClass(DHash, [{
    key: "get",
    value: function get(key, setter) {
      if (this.store[key]) {
        var value = this.store[key];
        delete this.store[key];
        return value;
      }

      // TODO: check if this is a fn or value
      return setter ? this.store[key] = setter() : undefined;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (key && value) return this.store[key] = value;
    }
  }, {
    key: "flush",
    value: function flush() {
      delete this.store;
      return this.store = {};
    }
  }]);

  return DHash;
})();

exports["default"] = DHash;
module.exports = exports["default"];