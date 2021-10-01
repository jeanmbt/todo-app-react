/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const isValidInput = (toDo) => {
  const toDoSanitazed = toDo.text.trim()
  return !!toDoSanitazed
}