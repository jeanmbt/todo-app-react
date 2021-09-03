import React, {useState} from 'react';
import TaskForm from './TaskForm';

function Task({tasks, completeTask}) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  return tasks.map((task, index) => (
    <form 
      className={task.id}
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
    </form>
  ))
}
  

export default Task


// class Task extends Component {

// handleClick = () => {
//   this.props.done = !this.props.done; 
// }
//   render() {
//     return (
//       <div
//         className={`task ${this.props.done ? 'task-done' : ' '}`}>
//         <input type="checkbox" id="task" name="task"/>
//         something like checkedAttr={this.state.checkedAttr} for the checked or use font awesome React Icons with square and square-check (than you can do it with animations)

//         <label htmlFor="task">task task task </label>
//       </div>
//     )
//   }
// }