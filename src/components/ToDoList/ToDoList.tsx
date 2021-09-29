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
      // console.log(toDo);
      return;
    }
    toDo.isComplete = false;

    // validateToDo(toDo);
    // debugger;

    const newToDos = [toDo, ...toDos];
    setToDos(newToDos);
  };

  const validateToDo = (toDo) => {
    if (!toDo.text || /^\s*$/.test(toDo.text)) {
      return;
    }
  };

  const markToDo = (id) => {
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
          isComplete={toDo.isComplete}
          toDo={toDo}
          markToDo={markToDo}
          key={index}
        />
      ))}
    </StyledToDoList>
  );
};

export default ToDoList;
