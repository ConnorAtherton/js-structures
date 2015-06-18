/**
 * Binary Search
 *
 * @complexity {Time}
 * @complexity {Space}
 */
exports = function binarySearch(list, value){
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
  return (list[middle] !== value) ? -1 : middle;
}
