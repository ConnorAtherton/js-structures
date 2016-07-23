//
// Bit Integer class -- Immutable arbitrary-precision integers.
//
// NOTE: What is the largest number we can store in JS, 2**32?
//
// http://www.cs.ucf.edu/~dmarino/ucf/java/BigInt.java
// http://iwillgetthatjobatgoogle.tumblr.com/post/32583376161/writing-biginteger-better-than-jdk-one
//
export default class BigInt {
  constructor() {

  }

  static fromString() {

  }

  // @returns [Number]
  add() {

  }

  // @returns [Number]
  subtract() {

  }

  // @returns [Boolean]
  equals() {

  }

  // Returns 1 if the the other object is less, -1 if the other object is greater,
  // and 0 is both objects are equal.
  compareTo(other) {
    // trivial case where the digits are different sizes
    if (this.size > other.size) {
      return 1
    } else if (other.size > this.size) {
      return -1
    }

    // iterate through an array

    // all digits must be the same
    return 0
  }
}
