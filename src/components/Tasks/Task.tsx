import React, {useState} from 'react';
import { StyledTask } from './tasks.style';

const Task = ({tasks, completeTask}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  return tasks.map((task, index) => (
    <StyledTask
      className={`task-${task.id}-container`}
      key={index}
    >
      <input 
        type="checkbox" 
        key={task.id}
        name={`task-${task.id}`}
        defaultChecked={false}
        checked={task.isComplete}
        onClick={() => completeTask(task.id)}
      />
      <label 
        htmlFor={`task-${task.id}`}
        key={`label-${task.id}`}
      >
        {task.text}
      </label>
    </StyledTask>
  ))
}
  

export default Task
