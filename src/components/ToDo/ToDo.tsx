import React, { useState } from 'react'
import { StyledToDo } from './ToDo.style'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

interface IToDosProps {
  // prettier-ignore
  toDo: { 
    id: number; 
    text: string; 
    isCompleted: boolean; 
    key: number }
  markToDo: (id: number) => void
}

const ToDo = ({ toDo, markToDo }: IToDosProps) => {
  //TODO: (TODO-6): Implement Edit
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: "",
  // });

  return (
    <StyledToDo onClick={() => markToDo(toDo.id)}>
      {toDo.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      {toDo.text}
    </StyledToDo>
  )
}

export default ToDo
