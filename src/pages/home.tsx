import React from 'react'
import ToDoList from '../components/ToDoList'
import { Page, Title } from '../styles/styles'


function Home() {
  return (
    <Page className="home">
      <Title>Title</Title>
      <ToDoList/>
    </Page>
  )
}

export default Home
