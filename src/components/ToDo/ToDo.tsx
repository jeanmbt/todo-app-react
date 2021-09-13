import React, {useState} from 'react';
import { StyledToDo } from './ToDo.style';
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const ToDo = ({toDo, completeToDo, isComplete}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

 
  return (
    <StyledToDo
      onClick={() => completeToDo(toDo.id)}>
        {isComplete ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
        {toDo.text}
    </StyledToDo>
  )
}
  

export default ToDo
