//
// Factorial
//
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recursive = recursive;
exports.tailRecursive = tailRecursive;
exports.brute = brute;

function recursive(num) {
  return num < 2 ? num : num * recursive(num - 1);
}

function tailRecursive(_x2) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    var num = _x2;
    acc = undefined;
    _again = false;
    var acc = _arguments[1] === undefined ? 0 : _arguments[1];
    if (num === 0) {
      return acc;
    } else {
      _arguments = [_x2 = num - 1, num * acc];
      _again = true;
      continue _function;
    }
  }
}

function brute(num) {
  var acc = num;

  while (num-- > 1) {
    acc *= num;
  }

  return acc;
}