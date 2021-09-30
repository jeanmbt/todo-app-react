import React, { isValidElement, useState } from 'react'
import { StyledToDoList } from './toDoList.style'
import ToDo from '../ToDo/ToDo'
import ToDoInput from '../ToDoInput'
import { isValidInput } from '../../utils'

//TODO: MOVE TO TYPE
interface IToDos {
  id: number
  isCompleted: boolean
  text: string
  markToDo: ({ id: number }) => void
  key: number
}

const ToDoList = () => {
  const [toDos, setToDos] = useState<IToDos[]>([])

  const addToDo = (toDo) => {
    if (!isValidInput(toDo)) {
      return
    }

    toDo.isCompleted = false

    const newToDos = [...toDos, toDo]

    setToDos(newToDos)
  }

  const markToDo = (id) => {
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.isCompleted = !toDo.isCompleted
      }
      return toDo
    })
    setToDos(updatedToDos)
  }
  // prettier-ignore
  return (
    <StyledToDoList className="list-body">
      <ToDoInput onSubmit={addToDo} />
      {toDos
        .map((toDo, index) => (
          <ToDo 
            toDo={toDo} 
            markToDo={markToDo}
            key={index} />
        ))
        .reverse()}
    </StyledToDoList>
  )
}

export default ToDoList
