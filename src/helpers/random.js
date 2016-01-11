export function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function lowerThan(max) {
  return between(0, max)
}
