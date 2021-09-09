import React, {useState} from 'react';
import { StyledTaskList } from './taskList.style';
import Task from '../Tasks/Task';
import TaskForm from '../TaskForm';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return
    }

    const newTasks = [task, ...tasks]

    setTasks(newTasks)
  }

  const completeTask = id => {
    let updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete
      }
      return task
    })
    setTasks(updatedTasks)
  }
  

  return (
    <StyledTaskList className="list-body">
      <TaskForm onSubmit={addTask}/>
      <Task 
        tasks={tasks}
        completeTask={completeTask}
      />
    </StyledTaskList>
  )
}

export default TaskList
