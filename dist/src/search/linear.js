/**
 * Linear search
 *
 * Finds an item in a list by sequentially checking until
 * the desired element is found.
 *
 * @time O(n)
 * @space O(n)
 *
 * @benefits
 * - easy to implement
 * - low on resources
 * - as a rough guide, okay to use on lists with 100 items or less
 *
 * @drawbacks
 * - inefficent for large lists
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brute = brute;
exports.recursive = recursive;
exports.sentinel = sentinel;
exports.reverse = reverse;

function brute(el, list) {
  if (list.length === 0) return null;

  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i] === el) return i;
  }

  return null;
}

function recursive(_x2, _x3) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    var el = _x2,
        list = _x3;
    index = undefined;
    _again = false;
    var index = _arguments[2] === undefined ? 0 : _arguments[2];

    if (list.length === 0) return null;
    if (list[0] === el) {
      return index;
    } else {
      _arguments = [_x2 = el, _x3 = list.slice(1), ++index];
      _again = true;
      continue _function;
    }
  }
}

function sentinel(el, list) {
  if (list.length === 0) return undefined;

  var length = list.length;
  var i = 1;

  list[length] = el;

  // need to check this but 0 is falsey in js
  if (list[0] === el) return 0;

  // not bounded because it will definitely return when it
  // hits the sentinel value
  while (i++) {
    if (list[i] === el) break;
  }

  return length === i ? null : i;
}

function reverse(el, list) {
  if (list.length === 0) return null;

  var i = list.length - 1;

  while (i-- && i !== 0) {
    if (list[i] === el) return i;
  }

  return null;
}