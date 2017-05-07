import assert from 'assert'

//
// Given a linear street of houses, represented by an array, where each house
// has a given value associated with it; return the highest amount you could obtain
// by robbing each house in one pass with the constraint that when you rob a house
// you are not allowed to rob the houses either side of it.
//
// e.g.
//
// 1 - 2 - 3
//     ^
// Robbing two above would render us unable to rob the first or last house.
//
// 9 - 20 - 5 - 15 - 30
//     ^             ^
//
// In the list above the houses with value of 20 and 30 would give the correct answer.
//
export default function housingRobber(houses) {
  const runningMax = []
  const length = houses.length

  let previousHouseAvailable
  let newPossibleMax
  let highestMax

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      runningMax.push(houses[i])
      continue
    }

    if (i === 1) {
      runningMax.push(houses[i] > houses[i - 1] ? houses[i] : houses[i - 1])
      continue
    }

    // handle underflow: handles base cases of 1 or 2 houses.
    previousHouseAvailable = houses[i - 2] !== undefined
    newPossibleMax = houses[i] + runningMax[i - 2]
    highestMax = runningMax.slice(-1)[0]

    if (previousHouseAvailable && newPossibleMax > highestMax) {
      runningMax.push(newPossibleMax)
    } else {
      runningMax.push(highestMax)
    }

    // console.log(runningMax)
  }

  return runningMax.length === 0 ? 0 : runningMax.pop();
}

assert.equal(housingRobber([]), 0)
assert.equal(housingRobber([1]), 1)
assert.equal(housingRobber([1, 20]), 20)
assert.equal(housingRobber([1, 20, 18]), 20)
assert.equal(housingRobber([9, 20, 5, 15, 30]), 50)
