import React, { useState } from "react";
import { StyledToDoList } from "./toDoList.style";
import ToDo from "../ToDo/ToDo";
import ToDoInput from "../ToDoInput";

interface IToDos {
  id: number;
  isComplete: boolean;
}

const ToDoList = () => {
  const [toDos, setToDos] = useState<IToDos[]>([]);

  const addToDo = (toDo) => {
    if (!toDo.text || /^\s*$/.test(toDo.text)) {
      return;
    }
    const newToDos = [toDo, ...toDos];
    setToDos(newToDos);
  };

  const completeToDo = (id) => {
    let updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.isComplete = !toDo.isComplete;
      }
      return toDo;
    });
    setToDos(updatedToDos);
  };

  return (
    <StyledToDoList className="list-body">
      <ToDoInput onSubmit={addToDo} />
      {toDos.map((toDo, index) => (
        <ToDo
          isComplete={toDo.isComplete == null ? false : toDo.isComplete}
          toDo={toDo}
          completeToDo={completeToDo}
          key={index}
        />
      ))}
    </StyledToDoList>
  );
};

export default ToDoList;
