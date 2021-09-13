import React, {useState} from 'react';
import { StyledToDoList } from './toDoList.style';
import ToDo from '../ToDo/ToDo';
import ToDoForm from '../ToDoForm';

function ToDoList() {
  const [toDos, setToDos] = useState([]);

  const addToDo = toDo => {
    if (!toDo.text || /^\s*$/.test(toDo.text)) {
      return
    }

    const newToDos = [toDo, ...toDos]

    setToDos(newToDos)
  }

  const completeToDo = id => {
    let updatedToDos = toDos.map(toDo => {
      if (toDo.id === id) {
        toDo.isComplete = !toDo.isComplete
      }
      return toDo
    })
    setToDos(updatedToDos)
  }
  

  return (
    <StyledToDoList className="list-body">
      <ToDoForm onSubmit={addToDo}/>
      <ToDo
        toDos={toDos}
        completeToDo={completeToDo}
      />
    </StyledToDoList>
  )
}

export default ToDoList
