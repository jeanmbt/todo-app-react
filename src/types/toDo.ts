export interface IToDoItem {
  id: number; 
  text: string; 
  isCompleted: boolean; 
  key: number
  markToDo: (id: number) => void;
}

export interface IToDoProps {
  toDo: IToDoItem;
  markToDo: (id: number) => void;
}
