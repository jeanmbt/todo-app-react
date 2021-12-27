import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Page } from '../../styles/styles'
import { lightTheme } from '../../styles/themes/lightTheme'
import { darkTheme } from '../../styles/themes/darkTheme'
import { ThemeContext } from 'styled-components'

const NotFound = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Page>
        <h1>Page not found</h1>
        {/* TODO: Link styled as a button */}
        <Link to="/todo-app-react">Go back</Link>
      </Page>
    </ThemeProvider>
  )
}

export default NotFound
