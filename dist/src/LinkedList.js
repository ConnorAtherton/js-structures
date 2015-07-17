'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _helpersNode = require('./helpers/node');

var _helpersNode2 = _interopRequireDefault(_helpersNode);

var LinkedList = (function () {
  function LinkedList() {
    var node = arguments[0] === undefined ? null : arguments[0];

    _classCallCheck(this, LinkedList);

    this.head = this.tail = node instanceof _helpersNode2['default'] ? node : null;
    this.length = node ? 1 : 0;
    this.current = this.head;
  }

  _createClass(LinkedList, [{
    key: 'append',

    // Adds node to the end of the list
    value: function append(node) {
      node = node instanceof _helpersNode2['default'] ? node : new _helpersNode2['default'](node);

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
    key: 'prepend',

    // Adds node to the start of the list
    value: function prepend(node) {
      node = node instanceof _helpersNode2['default'] ? node : new _helpersNode2['default'](node);

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
    key: 'pop',

    // Removes node from the end of the list
    value: function pop() {
      var node = this.tail;

      if (this.tail.previous) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      } else {
        this.tail = null;
      }

      this.length--;

      return node;
    }
  }, {
    key: 'lpop',

    // Removes node from the start of the list
    value: function lpop() {
      var node = this.head;

      if (this.head.next) {
        this.current = this.head = this.head.next;
        this.head.previous = null;
      } else {
        this.current = this.head = null;
      }

      this.length--;

      return node;
    }
  }, {
    key: 'moveToHead',
    value: function moveToHead(node) {
      this.excise(node);
      node.next = this.head;
      this.head = this.current = node;

      return this;
    }
  }, {
    key: 'remove',
    value: function remove(node) {
      this.excise(node);
      this.length--;

      return this;
    }
  }, {
    key: 'excise',
    value: function excise(node) {
      var previous = node.previous;
      var next = node.next;

      if (previous !== null) previous.next = next;
      if (next !== null) next.previous = previous;

      if (this.head === node) this.head = this.current = next;
      if (this.tail === node) this.tail = previous;

      return this;
    }
  }, {
    key: 'empty',
    value: function empty() {
      return this.length === 0;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return this;
    }
  }, {
    key: 'next',
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
    key: 'reset',

    //
    // Called when the iterator ends prematurely (abruptly)
    // Caused by the following
    //
    // - break
    // - return
    // - throw
    // - continue (can act like a break if in outer loop)
    //
    value: function reset() {
      this.current = this.head;
    }
  }, {
    key: 'return',
    value: function _return() {
      this.current = this.head;
    }
  }]);

  return LinkedList;
})();

exports['default'] = LinkedList;
module.exports = exports['default'];