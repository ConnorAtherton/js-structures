export default function permutations(str) {
  if (str.length < 2) {
    return new Set([str])
  }

  const results = new Set()
  let last = null

  // Chop off last character...
  for (let prefix of permutations(str.slice(0, -1))) {
    // console.log('prefix:', prefix)

    last = str.slice(-1)

    // Add last character back in at every position...
    for (let i = 0; i <= prefix.length; i++) {
      // console.log('add:', prefix.substring(i, 0) + last + prefix.substring(i, prefix.length))

      results.add(prefix.substring(i, 0) + last + prefix.substring(i, prefix.length))
    }
  }

  return results
}
