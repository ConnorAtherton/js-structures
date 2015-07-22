//
// Functions thay generate or otherwise deal
// with randomness.
//
export function randomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
