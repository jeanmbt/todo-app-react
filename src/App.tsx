import React from 'react';
import { Title, Page, TaskList, TaskItem } from "./styles/styles"

function App() {
  return (
    <Page>
      <Title>Today</Title>
      
      <input type='text' value="add new task"></input>
      <TaskList>
        
        <TaskItem>
          <input type="checkbox" id="task" name="task"/>
          <label htmlFor="task">task task task </label>
        </TaskItem>
        <TaskItem>
          <input type="checkbox" id="task" name="task"/>
          <label htmlFor="task">task task task </label>
        </TaskItem>

      </TaskList>
    </Page>
  );
}

export default App;
