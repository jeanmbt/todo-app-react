/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// prettier-ignore

import React, { useState } from 'react'
import { StyledToDoList } from './toDoList.style'
import ToDo from '../ToDo/ToDo'
import ToDoInput from '../ToDoInput'
import { isValidInput } from '../../utils'
import { IToDoItem as IToDos } from '../../types/toDo'

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

  return (
    <StyledToDoList>
      <ToDoInput onSubmit={addToDo} />
      {toDos
        .map((toDo, index) => (
          <ToDo toDo={toDo} markToDo={markToDo} key={index} />
        ))
        .reverse()}
    </StyledToDoList>
  )
}

export default ToDoList
