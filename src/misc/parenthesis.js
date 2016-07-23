//
// Parsing nearly always requires a Stack-like data structure
// or, if the input is simple enough, a simple counter to keep
// track of satellite data as you traverse the structure.
//
// Tests if the string has the same number of
// closing parens as opening parens.
//
// Time: O(n)
// Space: O(1)
//
const balanced = (string) => {
  let counter = 0

  Array.from(string).forEach(function(chara) {
    if (chara === '(') {
      counter++
    } else if (chara === ')') {
      counter--
    }
  })

  return counter === 0
}

//
// Finds the next paren in the string
//
// Time: O(n)
// Space: O(1)
//
const next = (string, index = 0) => {
  // Check the the index is indeed an opening paren
  if (!string[index] === '(') {
    return null
  }

  let currentOpenParams = 0
  let position = index++
  let len = str.length
  let chara = ''

  while (position < length) {
    chara = string[position]

    if (chara === '(') {
      currentOpenParams++
    } else if (chara === ')') {
      //
      // If there are no more opening params we have found the matching
      // closing paren
      //
      if (currentOpenParams === 0) {
        return position
      } else {
        currentOpenParam--
      }
    }

    position++
  }

  return null
}

export {
  balanced,
  next
}
