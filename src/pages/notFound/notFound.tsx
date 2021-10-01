/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { Page } from '../../styles/styles'

const NotFound = () => {
  return (
    <Page>
      <h1>Page not found :`(</h1>
      <Link to="/">Go back home</Link>
    </Page>
  )
}

export default NotFound
