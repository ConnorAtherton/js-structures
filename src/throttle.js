function throttle(fn, interval) {
  // last time the function was executed
  var previous = 0;
  var ctx = fnTimeout = result = null;

  var later = function() {
    fnTimeout = null;
    result = fn.apply(ctx, args)
  }

  return function() {
    var args = [].slice(arguments);
    var now = Date.now();
    var remaining = interval - (now - previous);
    ctx = this;

    // we should cancel the timeout and execute the function
    // if remaining is 0 or less - indicating enough time has passed
    // since the last invocation.
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(fnTimeout);
      fnTimeout = null;

      // store the time of last invocation
      previous = now;

      // could call later here but saves a call I guess
      result = fn.apply(ctx, args);
    }

    if (!timeout) timeout = setInterval(later, remaining);
  }
}
