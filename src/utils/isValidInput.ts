export const isValidInput = (text) => {
  const toDoSanitazed = text.trim()
  return !!toDoSanitazed
}
