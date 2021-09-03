
import styled from 'styled-components';
import TaskList from '../components/TaskList';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2em;
  font-family: 'Inter', sans-serif;
`; 

export const Title = styled.h1`
  font-size: 3rem;
  display: block;
`;

export const StyledTaskList = styled(TaskList)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`; 

export const TaskItem = styled.div`
  flex-direction: row;
`; 