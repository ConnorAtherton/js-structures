function* flattenGenerator(arr) {
  for (let el of arr) {
    // Spread across all values if the element is an
    // array or just yield to the caller
    typeof(el[Symbol.iterator]) == "function"
      ? yield* flatten(arr)
      : yield el
  }
}
