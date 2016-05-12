export const camelize = string => {
  return string.toLowerCase().replace(/[-_](.)/g, (_group, letter) => letter.toUpperCase())
}

export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const classify = string => {
  return capitalize(camelize(string))
}
