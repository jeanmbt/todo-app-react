import React, { useState } from 'react'
import { StyledToDo } from './ToDo.style'
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdModeEdit,
  MdDelete,
} from 'react-icons/md'
import ToDoInput from '../ToDoInput'
import { IToDoProps } from '../../types/toDo'
import { IEdit } from '../../types/edit'
import { CheckBox, ToDoButtons, Wrapper } from '../../styles/styles'

const iconStyle = {
  margin: '0.2em',
}

const ToDo = ({ toDo, markToDo, updateToDo, removeToDo }: IToDoProps) => {
  const [edit, setEdit] = useState<IEdit>({
    id: null,
    value: '',
  })

  const submitUpdate = (value) => {
    updateToDo(value.id, value.text)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <ToDoInput edit={edit} onSubmit={submitUpdate} />
  }

  return (
    <Wrapper style={{ display: 'flex' }}>
      <StyledToDo onClick={() => markToDo(toDo.id)}>
        {toDo.isMarked ? (
          <CheckBox>
            <MdCheckBox />
          </CheckBox>
        ) : (
          <CheckBox>
            <MdCheckBoxOutlineBlank />
          </CheckBox>
        )}
        <div style={{ maxWidth: 'fit-content' }}>{toDo.text}</div>
      </StyledToDo>
      <ToDoButtons>
        <MdModeEdit
          className="icon"
          style={iconStyle}
          onClick={() => setEdit({ id: toDo.id, value: toDo.text })}
        />
        <MdDelete
          className="icon"
          style={iconStyle}
          onClick={() => removeToDo(toDo.id)}
        />
      </ToDoButtons>
    </Wrapper>
  )
}

export default ToDo
