function debounce(fn, timeout, immediate) {
  var fnTimeout = null;

  // use function expression to avoid
  // hoisting.
  var later = function() {
    fnTimeout = null;
    if (!immediate) fn.apply(ctx, args)
  }

  return function() {
    var args = [].slice(arguments);
    var ctx = this;

    // we should execute straight away if we tell it
    // to immediatly and this function is not already waiting
    // to execute.
    var shouldCall = immediate && !fnTimeout;

    // it has been called again so clean the timeout and
    // *debounce* the call by resetting the interval again
    window.clearTimeout(fnTimeout);

    // clean any previous timeouts on this function
    fnTimeout = window.setTimeout(later, timeout);

    if (shouldCall) fn.apply(ctx, args);
  }
}
