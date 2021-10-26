import React, { useState } from 'react'
import { StyledToDoList } from './toDoList.style'
import ToDo from '../ToDo/ToDo'
import ToDoInput from '../ToDoInput'
import { isValidInput } from '../../utils'
import { IToDoItem } from '../../types/toDo'

const ToDoList = () => {
  const [toDos, setToDos] = useState<IToDoItem[]>([])

  const addToDo = (toDo) => {
    if (!isValidInput(toDo.text)) {
      return
    }

    const newToDos = [...toDos, { ...toDo, isMarked: false }]

    setToDos(newToDos)
  }

  const updateToDo = (todoId: number, newValueText: string) => {
    if (!isValidInput(newValueText)) {
      return
    }

    const previousToDos = toDos.map((item) => {
      if (item.id === todoId) {
        item.text = newValueText
      }

      return item
    })

    setToDos(previousToDos)
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

  const removeToDo = (id) => {
    const removedToDos = toDos.filter((toDo) => toDo.id !== id)

    setToDos(removedToDos)
  }

  return (
    <StyledToDoList>
      <ToDoInput onSubmit={addToDo} />
      {toDos
        .map((toDo, index) => (
          <ToDo
            toDo={toDo}
            key={index}
            markToDo={markToDo}
            updateToDo={updateToDo}
            removeToDo={removeToDo}
          />
        ))
        .reverse()}
    </StyledToDoList>
  )
}

export default ToDoList
