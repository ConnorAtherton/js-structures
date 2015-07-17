"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  var next = arguments[1] === undefined ? null : arguments[1];
  var previous = arguments[2] === undefined ? null : arguments[2];

  _classCallCheck(this, Node);

  this.value = value;
  this.next = next;
  this.previous = previous;
};

exports["default"] = Node;
module.exports = exports["default"];