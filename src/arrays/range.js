//
// Returns an array representing a range of values.
//
// @param {Number} min
// @param {Number} max
// @param {Number} step
const range = (min, max = 10, step = 1) => {
  let res = [min]
  let next = min + step

  while (next <= max) {
    res.push(next)
    next = min + step
  }

  return res
}

export default range
