export default class Node {
  constructor(value, next = null, previous = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }
}
