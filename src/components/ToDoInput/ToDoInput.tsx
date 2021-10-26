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

  const handleSubmitAdd = (event) => {
    event.preventDefault()

    onSubmit({
      id: null,
      text: input,
    })
    setInput('')
  }

  const handleSubmitEdit = (event) => {
    event.preventDefault()

    onSubmit({
      id: edit?.id,
      text: input,
    })
    setInput('')
  }
  return (
    <InputWrapper>
      <form onSubmit={handleSubmitEdit}>
        {edit ? (
          <Wrapper>
            <StyledToDoInput
              type="text"
              placeholder={edit.value}
              value={input}
              name="text"
              onChange={(e) => handleChange(e)}
              maxLength={40}
              required
            />
            <Button onClick={handleSubmitEdit} onSubmit={handleSubmitEdit}>
              Edit to-do
            </Button>
          </Wrapper>
        ) : (
          // Header
          <Wrapper>
            <StyledToDoInput
              type="text"
              placeholder="add new todo"
              value={input}
              name="text"
              onChange={(e) => handleChange(e)}
              maxLength={40}
              required
            />
            <Button onClick={handleSubmitAdd} onSubmit={handleSubmitAdd}>
              Add to-do
            </Button>
          </Wrapper>
        )}
      </form>
    </InputWrapper>
  )
}

export default ToDoInput
