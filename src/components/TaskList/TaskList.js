import React, {useState} from 'react';
import { StyledTaskList } from './taskList.style';
import Task from '../Tasks/Task';
import TaskForm from '../TaskForm';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    // return nothing if empty
    if (!task.text || /^\s*$/.test(task.text)) {
      return
    }

    const newTasks = [task, ...tasks]

    setTasks(newTasks)
    // console.log(...tasks)
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
    <StyledTaskList>
      <TaskForm onSubmit={addTask}/>
      <Task 
        tasks={tasks}
        completeTask={completeTask}
      />
    </StyledTaskList>
  )
}

export default TaskList


// import Task from './task'; 

// const TaskList = (props) => {
//   const renderList = () => {
//     return props.tasks.map((task, index) => {
//       <Task
//         id={task.id}
//         key={task.key}
//         index={index}
//         done={task.done}
//       />
//     })
//   }

//   return (
//     <TaskList>
//       {renderList()}
//     </TaskList>
//   )
// };

// export default TaskList