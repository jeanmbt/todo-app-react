import { toUnicode } from 'punycode';
import React, {useState} from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

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
    <div>
      <TaskForm onSubmit={addTask}/>
      <Task 
        tasks={tasks}
        completeTask={completeTask}
      />
    </div>
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