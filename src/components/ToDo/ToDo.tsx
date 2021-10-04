import React, { useState } from 'react'
import { StyledToDo } from './ToDo.style'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { IToDoProps } from '../../types/toDo'

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '0.5em',
}

const ToDo = ({ toDo, markToDo }: IToDoProps) => {
  //TODO: (TODO-6): Implement Edit
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: "",
  // });

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
    </StyledToDo>
  )
}

export default ToDo
