import React from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import ToDoList from '../../components/ToDoList'

import { Page } from '../../styles/styles'

const Home = () => {
  return (
    <Page>
      <Header />
      <Title />
      <ToDoList />
    </Page>
  )
}

export default Home
