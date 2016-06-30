/**
 * Debounce
 *
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * **timeout** milliseconds
 *
 * @param fn {Function}
 * @param timeout {Number}
 */
export default function debounce(fn, waitTime) {
  var fnTimeout = ctx = args = time = result = null;

  // use function expression to avoid
  // hoisting.
  var later = function() {
    var calledLast = Date.now() - last

    if (calledLast < waitTime && last >= 0) {
      fnTimeout = setTimeout(later, waitTime - calledLast);
    } else {
      fnTimeout = null;

      result = fn.apply(ctx, args)
      if (!timeout) context = args = null;
    }
  }

  return function() {
    args = [].slice(arguments);
    ctx = this;
    time = Date.now()

    var shouldCall = !fnTimeout

    // it has been called again so clean the timeout and
    // *debounce* the call by resetting the interval again
    clearTimeout(fnTimeout);

    // clean any previous timeouts on this function
    if (!fnTimeout) fnTimeout = setTimeout(later, timeout);

    if (shouldCall) result = fn.apply(ctx, args);

    return result
  }
}
