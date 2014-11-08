/* An abstract type containing an arbitrary
 * amount of data. For a LinkedList we don't
 * have to store much but we could if we wanted to.
 *
 * @param {any} value - Value assigned to the node
 * @param {Node} next - Stores a reference to the next node in the list
 *                      so we can traverse
 */

function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

/* A chain of nodes of nodes that reference each other. The last
 * node references **null** which signals the end of the structure.
 *
 * We store the size on the object so we don't have to loop over all
 * values just to calculate the size.
 *
 */

function LinkedList() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

/* Traverses the LinkedList calling a callback for each node. Thee node is set
 * as the context for the callback. So **this** refers to the actual node and
 * not the list.
 *
 * @param {Function} callback - Function to be invoked for each node in the list.
 */

LinkedList.prototype.iterate = function(callback) {
  var current = this.first;

  while (current !== null) {
    callback.call(current);
    current = current.next;
  }

  return this;
}

/* Appends a new node to the end of the list and updates the size.
 *
 * @param {Any} value - value to be appended to the list
 */

LinkedList.prototype.append = function(value) {
  var node = new Node(value);

  if (this.size === 0) {
    this.first = node;
  } else {
    this.last.next = node;
  }

  // node.next = null;
  this.last = node;
  this.size++;

  return this;
}

/* A function that returns an iterator object so we can loop through
 * something enumerable. ES6 brings native iterators to the language
 * but I wrote this for fun.
 *
 * @param {LinkedList} list - The linkedlist to iterate on
 */

function Iterator(list) {
  this.list = list;
  this.index = list.first;
}

/* Checks whether there is another node in the enumerable type.
 *
 * @returns {Boolean}
 */

Iterator.prototype.hasNext = function() {
  return this.index !== null && this.index.next !== null;
}

/* Moves along the list setting the next node as the current node.
 *
 * @returns {Node} The next node.
 */

Iterator.prototype.next = function() {
  var nextNode = this.index.next;
  this.index = nextNode;
  return this.index;
}

/* Example usage.
 *
 * var list = new LinkedList();
 *
 * list.append('first');
 * list.append('second');
 * list.append('third');
 *
 * var i = new Iterator(list);
 * while(i.hasNext()) {
 *   // perform action
 *   i.next();
 * }
 */

