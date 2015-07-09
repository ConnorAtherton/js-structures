/**
 * Curry
 *
 * TODO: explanation
 */
export default function curry(func, ...initialArgs) {
  // function arity is stored in length prop
  let arity = func.length
  var initialConcat = false

  return function curried() {
    let curriedArgs = Array.prototype.slice.call(arguments)

    if (!initialConcat) {
      initialConcat = true
      curriedArgs = curriedArgs.concat(initialArgs)
    }

    if (curriedArgs.length >= arity) {
      return func.apply(this, curriedArgs)
    } else {
      return function inner() {
        let innerArgs = Array.prototype.slice.call(arguments)
        return curried.apply(null, curriedArgs.concat(innerArgs))
      }
    }
  }
}
