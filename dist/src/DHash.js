/**
 * A destructive hash where
 * a key can only be fetched a maximum of one time.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DHash;

function DHash() {
  if (!(this instanceof DHash)) return new DHash();

  this.store = {};
}

DHash.prototype.get = function (key, setter) {
  if (this.store[key]) {
    var value = this.store[key];
    delete this.store[key];
    return value;
  }

  // TODO: check if this is a fn or value
  return setter ? this.store[key] = setter() : undefined;
};

DHash.prototype.set = function (key, value) {
  if (key && value) return this.store[key] = value;
};

DHash.prototype.flush = function () {
  delete this.store;
  return this.store = {};
};
module.exports = exports["default"];