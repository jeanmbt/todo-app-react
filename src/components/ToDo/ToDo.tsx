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

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '0.5em',
}
// prettier-ignore
const ToDo = ({
  toDo,
  markToDo,
  updateToDo,
  removeToDo
}: IToDoProps) => {

  const [edit, setEdit] = useState<IEdit>({
    id: null,
    value: '',
  })

  const submitUpdate = (value) => {
    updateToDo(edit!.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <ToDoInput edit={edit} onSubmit={submitUpdate} />
  }

  return (
    <StyledToDo onClick={() => markToDo(toDo.id)}>
      {toDo.isMarked ? (
        <div style={divStyle}>
          <MdCheckBox />
        </div>
      ) : (
        <div style={divStyle}>
          <MdCheckBoxOutlineBlank />
        </div>
      )}
      {toDo.text}

      {/* <MdDelete style={{color: "red"}} onClick={() =>console.log(`click${toDo.id}`) } /> */}
      <MdDelete onClick={() => removeToDo(toDo.id)} />
      <MdModeEdit onClick={() => setEdit({id: toDo.id, value: toDo.text})}/>
    </StyledToDo>
  )
}

export default ToDo
