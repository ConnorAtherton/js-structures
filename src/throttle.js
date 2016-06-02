/**
 * Throttle
 *
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * **timeout** milliseconds
 *
 * @param {Function} fn
 * @param {Number} wait
 */
export default function throttle(fn, wait) {
  // last time the function was executed
  var previous = 0;
  var ctx = fnTimeout = result = args = null;

  var later = function() {
    previous = Date.now();
    result = fn.apply(ctx, args);
    clearTimeout(fnTimeout);
    fnTimeout = null;
  };

  return function() {
    var now = Date.now();
    var remaining = wait - (now - previous);

    // reference it here so we can use these args
    // in the *later* function above
    ctx = this;
    args = arguments;

    // store the time of last invocation for the first
    // time fn is called
    if (!previous) previous = now;

    // we should cancel the timeout and execute the function
    // if remaining is 0 or less - indicating enough time has passed
    // since the last invocation.
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(fnTimeout);
      fnTimeout = null;

      // store the time of last invocation for the first
      // time fn is called
      previous = now;

      // could call later here but saves a call I guess
      result = fn.apply(ctx, args);

      // reset every value
      ctx = args = null;
    } else if (!fnTimeout) {
      fnTimeout = setTimeout(later, remaining);
    }

    // This is async but we will return the last result
    return result;
  };
}
