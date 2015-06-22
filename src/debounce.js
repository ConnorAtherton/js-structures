/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * **timeout** milliseconds
 *
 * @params fn {Function}
 * @param timeout {Number}
 * @param immediate {Boolean}
 */
function debounce(fn, timeout, immediate) {
  var fnTimeout = ctx = args = null;

  // use function expression to avoid
  // hoisting.
  var later = function() {
    fnTimeout = null;
    if (!immediate) fn.apply(ctx, args)
  }

  return function() {
    args = [].slice(arguments);
    ctx = this;

    // we should execute straight away if we tell it
    // to immediatly and this function is not already waiting
    // to execute.
    var shouldCall = immediate && !fnTimeout;

    // it has been called again so clean the timeout and
    // *debounce* the call by resetting the interval again
    clearTimeout(fnTimeout);

    // clean any previous timeouts on this function
    fnTimeout = setTimeout(later, timeout);

    if (shouldCall) fn.apply(ctx, args);
  }
}

module.exports = debounce
