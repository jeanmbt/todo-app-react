import React, {useState} from 'react';
import { StyledToDo } from './ToDo.style';
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const ToDo = ({toDos, completeToDo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  return toDos.map((toDo, index) => (
    <StyledToDo
      key={index}
    >
      <input 
        type="checkbox" 
        key={toDo.id}
        name={`toDo-${toDo.id}`}
        defaultChecked={false}
        checked={toDo.isComplete}
        onClick={() => completeToDo(toDo.id)}
      />
      <label 
        htmlFor={`task-${toDo.id}`}
        key={`label-${toDo.id}`}
      >
        {toDo.text}
      </label>
      {/* MdCheckBox
      MdCheckBoxOutlineBlank */}
    </StyledToDo>
  ))
}
  

export default ToDo
