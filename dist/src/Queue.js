//
// Queue
//
// An unbounded queue
// first-in-first-out data structure
//
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = (function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.store = [];
    this.size = 0;
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(value) {
      this.store.unshift(value);
      this.size++;
      return this;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      var val = this.store.pop();
      this.size--;
      return val;
    }
  }]);

  return Queue;
})();

exports["default"] = Queue;
module.exports = exports["default"];