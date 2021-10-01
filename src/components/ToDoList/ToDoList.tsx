/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useState } from 'react'
import { StyledToDoList } from './toDoList.style'
import ToDo from '../ToDo/ToDo'
import ToDoInput from '../ToDoInput'
import { isValidInput } from '../../utils'
import { IToDoItem } from '../../types/toDo'

const ToDoList = () => {
  const [toDos, setToDos] = useState<IToDoItem[]>([])

  const addToDo = (toDo) => {
    if (!isValidInput(toDo)) {
      return
    }

    toDo.isMarked = false

    const newToDos = [...toDos, toDo]

    setToDos(newToDos)
  }

  const markToDo = (id) => {
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.isMarked = !toDo.isMarked
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
