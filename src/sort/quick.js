// Quicksort
//
// Chooses a pivot and sorts all other elements into side being lower or
// greater than the pivot. Repeat the sort of the sub files until we reach
// the base cases where the file consists of a single element.
//
// Time: O(n log n)
// Space: O(n) for temporary arrays
// Stable: not usually
export function simple(file, random = false) {
  if (file.length < 2) { return file }

  // Pivot is either random of the first element
  //
  // NOTE: an improvement is to take the median of the first,
  // middle, and last elements as the pivot after they have been sorted
  // NOTE: let pivot = Math.floor((left + right + (arr.length / 2)) / 3);
  let pivot = random ? file[Math.floor(Math.random() * file.length)] : file[0]
  let left = []
  let eq = []
  let right = []

  for (var i = 0; i < file.length; i++) {
    if (file[i] < pivot) {
      left.push(file[i])
    } else if (file[i] === pivot) {
      eq.push(file[i])
    } else {
      right.push(file[i])
    }
  }

  return simple(left).concat(eq).concat(simple(right))
}
