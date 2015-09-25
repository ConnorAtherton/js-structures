//
// HashFromString
//
// Given a dot-separated string like 'one.two.three'
// returns a nested hash with the value set as the
// return value
//
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = hashFromString;

function hashFromString(string, hash, fn) {
  if (hash === undefined) hash = {};

  var tmp = undefined;
  var key = undefined;

  string = string.split('.');
  key = string.shift();
  string = string.join('.');

  if (string === '') {
    hash[key] = fn.call(null, key);
  } else {
    hash[key] = hashFromString(string, tmp, fn);
  }

  return key || {};
}

module.exports = exports['default'];