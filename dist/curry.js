/**
 * Curry
 *
 * TODO: explanation
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = curry;

function curry(func) {
  for (var _len = arguments.length, initialArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    initialArgs[_key - 1] = arguments[_key];
  }

  // function arity is stored in length prop
  var arity = func.length;
  var initialConcat = false;

  return function curried() {
    var curriedArgs = Array.prototype.slice.call(arguments);

    if (!initialConcat) {
      initialConcat = true;
      curriedArgs = curriedArgs.concat(initialArgs);
    }

    if (curriedArgs.length >= arity) {
      return func.apply(this, curriedArgs);
    } else {
      return function inner() {
        var innerArgs = Array.prototype.slice.call(arguments);
        return curried.apply(null, curriedArgs.concat(innerArgs));
      };
    }
  };
}

module.exports = exports["default"];