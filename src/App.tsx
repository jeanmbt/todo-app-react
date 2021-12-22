import React, { useContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Home from './pages/home'
import NotFound from './pages/notFound/'
import { lightTheme } from './styles/themes/lightTheme'
import { darkTheme } from './styles/themes/darkTheme'
import { ThemeContext } from 'styled-components'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={['/todo-app-react/', '/']} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
