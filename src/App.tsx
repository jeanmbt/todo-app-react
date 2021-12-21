import React, { useContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from './pages/home'
import NotFound from './pages/notFound/'
import { lightTheme } from './styles/themes/lightTheme'
import { darkTheme } from './styles/themes/darkTheme'
import { ThemeContext } from 'styled-components'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={['/todo-app-react/', '/']} component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
