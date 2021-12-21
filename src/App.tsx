import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from './pages/home'
import NotFound from './pages/notFound/'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
