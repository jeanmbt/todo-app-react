import React from 'react'
import TaskList from '../components/TaskList'
import { Page, Title } from '../styles/styles'
import submitButton from '../components/submitButton'

function home() {
  return (
    <Page className="home">
      <Title>Title</Title>
      <TaskList/>
    </Page>
  )
}

export default home
