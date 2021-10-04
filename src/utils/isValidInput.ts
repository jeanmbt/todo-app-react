export const isValidInput = (toDo) => {
  const toDoSanitazed = toDo.text.trim()
  return !!toDoSanitazed
}