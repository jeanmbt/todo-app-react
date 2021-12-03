import React from 'react'
import Title from '../../components/Title'
import ToDoList from '../../components/ToDoList'

import { Page } from '../../styles/styles'

const Home = () => {
  return (
    <Page>
      <Title />
      <ToDoList />
    </Page>
  )
}

export default Home
