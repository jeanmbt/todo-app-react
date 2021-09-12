import React, {useState} from 'react';
import { StyledTaskList } from './toDoList.style';
import ToDo from '../ToDo/ToDo';
import ToDoForm from '../ToDoForm';

function ToDoList() {
  const [toDos, setTasks] = useState([]);

  const addToDo = toDo => {
    if (!toDo.text || /^\s*$/.test(toDo.text)) {
      return
    }

    const newToDos = [toDo, ...toDos]

    setTasks(newToDos)
  }

  const completeToDo = id => {
    let updatedToDos = toDos.map(toDo => {
      if (toDo.id === id) {
        toDo.isComplete = !toDo.isComplete
      }
      return toDo
    })
    setTasks(updatedToDos)
  }
  

  return (
    <StyledTaskList className="list-body">
      <ToDoForm onSubmit={addToDo}/>
      <ToDo
        toDo={toDos}
        completeToDo={completeToDo}
      />
    </StyledTaskList>
  )
}

export default ToDoList
