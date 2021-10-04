import React from 'react'
import { Link } from 'react-router-dom'
import { Page } from '../../styles/styles'

const NotFound = () => {
  return (
    <Page>
      <h1>Page not found</h1>
      {/* TODO: Link styled as a button */}
      <Link to="/">Go back</Link>
    </Page>
  )
}

export default NotFound
