/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// prettier-ignore
import React, { useState } from 'react'
import { StyledToDo } from './ToDo.style'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { IToDoProps } from '../../types/toDo'

// interface IToDosProps {
//   toDo: {
//     id: number;
//     text: string;
//     isCompleted: boolean;
//     key: number }
//   markToDo: (id: number) => void
// }

const ToDo = ({ toDo, markToDo }: IToDoProps) => {
  //TODO: (TODO-6): Implement Edit
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: "",
  // });

  return (
    <StyledToDo onClick={() => markToDo(toDo.id)}>
      {toDo.isMarked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      {toDo.text}
    </StyledToDo>
  )
}

export default ToDo
