const isDigit = c => /^\d$/.test(c)

const runLength = {
  encode: (string) => {
    // TODO
  },

  decode: (string) => {
    let stringBuilder = ""

    for (const char of string) {
      // Continue through the string until we hit some action boundary
      if (char !== ']') {
        stringBuilder = stringBuilder + char
        continue
      }

      // If we hit an action boundary, process the current string builder accumulated state
      const startIndex = stringBuilder.lastIndexOf('[')
      const charPattern = stringBuilder.slice(startIndex + 1)

      stringBuilder = stringBuilder.substring(0, startIndex + 1)

      // Collect the multiplier by working backwards for numbers
      let multiplierIndex = startIndex - 1

      while (multiplierIndex > -1 && isDigit(stringBuilder[multiplierIndex])) {
        multiplierIndex--
      }

      let multiplier = parseInt(
        stringBuilder.substring(multiplierIndex + 1, startIndex),
        10
      )

      // Remove count and opening boundary for next specification
      stringBuilder = stringBuilder.substring(0, multiplierIndex + 1)

      stringBuilder = stringBuilder + charPattern.repeat(multiplier)
    }

    return stringBuilder
  }
}

export {
  runLength
}
