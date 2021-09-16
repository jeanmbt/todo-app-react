import React, {useState} from 'react'
import FormContainer from '../FormContainer';
import SubmitButton from '../SubmitButton';
import { StyledToDoInput } from './ToDoInput.style';

export interface Input {
  input: string
}

const ToDoInput = (props) => {
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

  const onFocusChange = () => {

  };

  return (
    <form style={{display: 'flex'}} onSubmit={handleSubmit}>
      <StyledToDoInput
        type='text' 
        placeholder="add new todo"
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        onFocus={onFocusChange}
        maxLength={40}
        >
      </StyledToDoInput>
      <SubmitButton onSubmit={handleSubmit}/>
    </form>
  )
}

export default ToDoInput
