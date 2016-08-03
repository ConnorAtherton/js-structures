function* flattenGenerator(arr) {
  for (let el of arr) {
    // Spread across all values if the element is an
    // array or just yield to the caller
    typeof(el[Symbol.iterator]) == "function"
      ? yield* flatten(arr)
      : yield el
  }
}

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
