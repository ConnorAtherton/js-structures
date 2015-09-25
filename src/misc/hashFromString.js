//
// HashFromString
//
// Given a dot-separated string like 'one.two.three'
// returns a nested hash with the value set as the
// return value
//
export default function hashFromString(string, hash = {}, fn) {
  let tmp
  let key

  string = string.split('.')
  key = string.shift()
  string = string.join('.')

  if (string === '') {
    hash[key] = fn.call(null, key)
  } else {
    hash[key] = hashFromString(string, tmp, fn)
  }

  return (key || {})
}
