export interface IToDos {
  id: number
  isCompleted: boolean
  text: string
  markToDo: ({ id: number }) => void
  key: number
}