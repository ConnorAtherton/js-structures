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
      return func.apply(null, curriedArgs);
    } else {
      return function inner() {
        var innerArgs = Array.prototype.slice.call(arguments);
        return curried.apply(null, curriedArgs.concat(innerArgs));
      };
    }
  };
}

//
// Pure ES6 version
//
var newCurry = function newCurry(fn) {
  var arity = fn.length;
  var curried = function curried() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length < arity ? function () {
      for (var _len3 = arguments.length, more = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        more[_key3] = arguments[_key3];
      }

      return curried.apply(undefined, args.concat(more));
    } : fn.apply(undefined, args);
  };
  return curried;
};
module.exports = exports["default"];