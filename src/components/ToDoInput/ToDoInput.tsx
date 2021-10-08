import React, { useState } from 'react'
import { IToDoInputProps } from '../../types/toDoInput'
import { StyledToDoInput } from './ToDoInput.style'

const ToDoInput = (props: IToDoInputProps) => {
  const { onSubmit, edit } = props
  const [input, setInput] = useState<string>('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    })
    setInput('')
  }

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <StyledToDoInput
        type="text"
        placeholder="add new todo"
        value={input}
        name="text"
        onChange={handleChange}
        maxLength={40}
      ></StyledToDoInput>
      {edit ? (
        <button onSubmit={handleSubmit}> Edit Item</button>
      ) : (
        <button onSubmit={handleSubmit}>Add Item</button>
      )}
    </form>
  )
}

export default ToDoInput
