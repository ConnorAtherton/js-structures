/**
 * Throttle
 *
 * Returns a functions that will only be executed once every **wait**
 * milliseconds. Useful when we want to ensure a constant rate of events being fired.
 *
 * @param {Function} fn
 * @param {Number} wait
 */
export default function throttle(fn, wait) {
  // last time the function was executed
  let previous = 0
  let ctx = null
  let fnTimeout = 0
  let result = null
  let args = null

  const later = function() {
    previous = Date.now()
    result = fn.apply(ctx, args)
    clearTimeout(fnTimeout)
    fnTimeout = null
  }

  return function(...splatArgs) {
    let now = Date.now()
    let remaining = wait - (now - previous)

    // reference it here so we can use these args
    // in the *later* function above
    //
    // eslint-disable-next-line no-invalid-this
    ctx = this
    args = splatArgs

    // store the time of last invocation for the first
    // time fn is called
    if (!previous) {
      previous = now
    }

    // we should cancel the timeout and execute the function
    // if remaining is 0 or less - indicating enough time has passed
    // since the last invocation.
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(fnTimeout)
      fnTimeout = null

      // store the time of last invocation for the first
      // time fn is called
      previous = now

      // could call later here but saves a call I guess
      result = fn.apply(ctx, args)

      // reset every value
      ctx = args = null
    } else if (!fnTimeout) {
      fnTimeout = setTimeout(later, remaining)
    }

    // This is async but we will return the last result
    return result
  }
}
