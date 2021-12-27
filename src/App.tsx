import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import NotFound from './pages/notFound/'

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
