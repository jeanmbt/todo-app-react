import React, {useState} from 'react'

const TaskForm = (props) => {
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

  const inputWidth = {
    "width": "16em",
    "border": '0',
    "border-bottom": '1px solid #e5e5e5',
    "color": 'black',
  };
  
  const onFocusChange = () => {

  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        style={inputWidth}
        type='text' 
        placeholder="add new task"
        value={input}
        name='text'
        className='task-input'
        onChange={handleChange}
        onFocus={onFocusChange}
        maxLength={40}
        >
      </input>
      <button className='task-button' onSubmit={handleSubmit}>Add Task</button>
      {/* <submitButton className='task-button' onSubmit={handleSubmit}>Add Task </submitButton> */}
    </form>
  )
}

export default TaskForm
