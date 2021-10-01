/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import ToDoList from '../../components/ToDoList'

import { Page, Title } from '../../styles/styles'

const Home = () => {
  return (
    <Page>
      <Title>Today&apos;s List</Title>
      <ToDoList />
    </Page>
  )
}

export default Home
