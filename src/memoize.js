var memoize = function(fn, hasher, name) {
  // name is an optional key to handle cases where
  // the function doesn't have a name
  name = name || ""
  // stays in scope for all returned functions
  var cache = {};

  var createHashKey = function(fn, args) {
    return JSON.stringify(fn.name + "-" + args.join("_"));
  }

  return function memoizer() {
    var args = Array.prototype.slice.call(arguments);
    var key = (hasher || createHashKey).call(this, fn, args);
    var isCached = !!cache[key];

    // neat tidbit - wrapping the expression in *()* causes the resulting
    // assignment value to be returned
    return isCached ? cache[key] : (cache[key] = fn.apply(this, args));
  }
}

// we can't rely on the name attribute because there
// are lots of edge cases. Function declerations have a name
// attr but expressions don't. And a lot more are documented online,
// there was a really good blog post by one of the people working on
// jshint

module.exports = memoize
