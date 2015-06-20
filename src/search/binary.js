/**
 * Binary Search
 *
 * Returns the array index of the number if found.
 * Returns null if the value isn't found.
 *
 * @complexity {Time}
 * @complexity {Space}
 */
function binarySearch(list, value) {
  var startIndex = 0
  var stopIndex = list.length - 1
  var middle = Math.floor((stopIndex + startIndex) / 2)

  while (list[middle] !== value && startIndex < stopIndex) {

    // adjust search area
    if (value < list[middle]){
      stopIndex = middle - 1;
    } else if (value > list[middle]){
      startIndex = middle + 1;
    }

    // recalculate middle
    middle = Math.floor((stopIndex + startIndex) / 2);
  }

  // make sure it's the right value
  return (list[middle] !== value) ? null : middle;
}

module.exports = binarySearch;
