import React, { useState } from 'react'
import { Button, InputWrapper, Wrapper } from '../../styles/styles'
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
    <InputWrapper>
      <form onSubmit={handleSubmit}>
        {edit ? (
          <Wrapper>
            <StyledToDoInput
              type="text"
              placeholder="edit todo"
              value={input}
              name="text"
              onChange={handleChange}
              maxLength={40}
            />

            <Button onClick={handleSubmit} onSubmit={handleSubmit}>
              Edit to-do
            </Button>
          </Wrapper>
        ) : (
          <Wrapper>
            <StyledToDoInput
              type="text"
              placeholder="add new todo"
              value={input}
              name="text"
              onChange={handleChange}
              maxLength={40}
            />

            <Button onClick={handleSubmit} onSubmit={handleSubmit}>
              Add to-do
            </Button>
          </Wrapper>
        )}
      </form>
    </InputWrapper>
  )
}

export default ToDoInput
