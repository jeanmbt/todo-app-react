const setId = (array) => {
  const lastItem = array[array.length - 1]
  return lastItem ? lastItem.id + 1 : 1
}

export default setId