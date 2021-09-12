import React, {useState} from 'react';
import { StyledToDo } from './tasks.style';

const ToDo = ({toDos, completeToDo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  return toDos.map((toDo, index) => (
    <StyledTask
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
    </StyledTask>
  ))
}
  

export default ToDo
