//
// HashFromString
//
// Given a dot-separated string like 'one.two.three'
// returns a nested hash with the value set as the
// return value
//
export default function hashFromString(string, hash = {}, fn = null) {
  let key
  let tmp

  // return empty hash if no string passed
  if (string.length === 0) {
    return {}
  }

  string = string.split('.')
  key = string.shift()
  string = string.join('.')

  if (string === '') {
    hash[key] = fn ? fn.call(null, key) : null
  } else {
    hash[key] = hashFromString(string, {}, fn)
  }

  return hash
}
