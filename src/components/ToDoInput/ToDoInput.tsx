import React, { useState } from 'react'
import { StyledToDoInput } from './ToDoInput.style'

export interface ToDoInputProps {
  onSubmit: ({ id: number, text: string }) => void
}

const ToDoInput = (props: ToDoInputProps) => {
  const { onSubmit } = props
  const [input, setInput] = useState('')

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

  const onFocusChange = () => {}

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <StyledToDoInput
        type="text"
        placeholder="add new todo"
        value={input}
        name="text"
        onChange={handleChange}
        onFocus={onFocusChange}
        maxLength={40}
      ></StyledToDoInput>
      <button onSubmit={handleSubmit}>Add Item</button>
    </form>
  )
}

export default ToDoInput
