export interface IToDoItem {
  id: number; 
  text: string; 
  isMarked: boolean; 
  key: number
  markToDo: (id: number) => void;
  updateToDo: (toDoId: number | null, newValue: string) => void;

}
export interface IToDoProps {
  toDo: IToDoItem;
  markToDo: (id: number) => void;
  updateToDo: (toDoId: number | null, newValue: string) => void;

}
