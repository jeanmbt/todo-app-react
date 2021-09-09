import React, {useState} from 'react'

function TaskForm(props) {
  const [input, setInput] = useState('')

  const handleChange = event => {
    setInput(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder="add new task"
        value={input}
        name='text'
        className='task-input'
        onChange={handleChange}>
      </input>
      {/* <button className='task-button' onSubmit={handleSubmit}>Add Task</button> */}
    </form>
  )
}

export default TaskForm
