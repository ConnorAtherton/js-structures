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
exports.LinearSearch = LinearSearch;
exports.RecursiveLinearSearch = RecursiveLinearSearch;
exports.SentinelLinearSearch = SentinelLinearSearch;

function LinearSearch(el, list) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i] === el) return i;
  }

  return null;
}

function RecursiveLinearSearch(el, list) {}

function SentinelLinearSearch(el, list) {}