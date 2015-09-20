//
// Functions thay generate, or otherwise deal
// with, randomness.
//
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomFromRange = randomFromRange;

function randomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}