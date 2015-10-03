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
      return func.apply(null, curriedArgs)
    } else {
      return function inner() {
        let innerArgs = Array.prototype.slice.call(arguments)
        return curried.apply(null, curriedArgs.concat(innerArgs))
      }
    }
  }
}

//
// Pure ES6 version
//
export function newCurry(fn) {
  const arity = fn.length
  const curried = (...args) =>
    args.length < arity ? (...more) => curried(...args, ...more) : fn(...args)
  return curried
}
