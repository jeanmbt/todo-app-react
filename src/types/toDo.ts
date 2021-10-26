export interface IToDoItem {
  id: number
  text: string
  isMarked: boolean
}
export interface IToDoProps {
  toDo: IToDoItem
  markToDo: (id: number) => void
  updateToDo: (toDoId: number, newValue: string) => void
  removeToDo: (id: number) => void
}
