import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Page } from '../../styles/styles'
import { lightTheme } from '../../styles/themes/lightTheme'

const NotFound = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Page>
        <h1>Page not found</h1>
        <Link to="/todo-app-react">Go back</Link>
      </Page>
    </ThemeProvider>
  )
}

export default NotFound
