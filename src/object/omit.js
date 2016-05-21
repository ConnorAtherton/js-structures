export default (obj, keys) => {
  const { ...rest } = obj

  for (let key of keys) {
    if (rest.hasOwnProperty(key)) {
      delete rest[key]
    }
  }

  return rest
}
