"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  var next = arguments[1] === undefined ? null : arguments[1];
  var previous = arguments[2] === undefined ? null : arguments[2];

  _classCallCheck(this, Node);

  this.value = value;
  this.next = next;
  this.previous = previous;
};

exports.Node = Node;

var LinkedList = (function () {
  function LinkedList() {
    var node = arguments[0] === undefined ? null : arguments[0];

    _classCallCheck(this, LinkedList);

    this.head = this.tail = node instanceof Node ? node : null;
    this.length = node ? 1 : 0;
    this.current = this.head;
  }

  _createClass(LinkedList, [{
    key: "append",

    // Adds node to the end of the list
    value: function append(node) {
      node = node instanceof Node ? node : new Node(node);

      if (this.empty()) {
        this.head = this.tail = this.current = node;
      } else {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
      }

      this.length++;

      return this;
    }
  }, {
    key: "prepend",

    // Adds node to the start of the list
    value: function prepend(node) {
      node = node instanceof Node ? node : new Node(node);

      if (this.empty()) {
        this.head = this.tail = this.current = node;
      } else {
        this.head.previous = node;
        node.next = this.head;
        this.head = node;
        this.current = node;
      }

      this.length++;

      return this;
    }
  }, {
    key: "pop",

    // Removes node from the end of the list
    value: function pop() {
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.length--;

      return this;
    }
  }, {
    key: "lpop",

    // Removes node from the start of the list
    value: function lpop() {
      this.current = this.head = this.head.next;
      this.head.previous = null;
      this.length--;

      return this;
    }
  }, {
    key: "moveToHead",
    value: function moveToHead(node) {
      excise(node);
      node.next = this.head;
      this.head = this.current = node;
    }
  }, {
    key: "remove",
    value: function remove(node) {
      excise(node);
      this.length--;

      return this;
    }
  }, {
    key: "excise",

    // removes a node from the list and joins the nodes around it
    // together
    value: function excise(node) {
      var previous = node.previous;
      var next = node.next;

      if (!previous) previous.next = next;
      if (!next) next.previous = previous;

      if (this.previous === node) this.head = next;
      if (this.tail === node) this.tail = previous;

      return node;
    }
  }, {
    key: "empty",
    value: function empty() {
      return this.length === 0;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return this;
    }
  }, {
    key: "next",
    value: function next() {
      var obj = null;

      if (this.current === null) {
        return { done: true };
      } else {
        obj = { value: this.current, done: false };
        this.current = this.current.next;
        return obj;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.current = this.head;
    }
  }, {
    key: "return",
    value: function _return() {
      // This will be called if the itertor was ended prematurely
      return this;
    }
  }]);

  return LinkedList;
})();

exports["default"] = LinkedList;

var list = new LinkedList();

list.append(2);
list.append(3).append(4).prepend(1);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    console.log(value);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"]) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}