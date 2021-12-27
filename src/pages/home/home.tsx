import { DefaultTheme, ThemeProvider } from 'styled-components'
import Header from '../../components/Header'
import Title from '../../components/Title'
import ToDoList from '../../components/ToDoList'
import usePersistedState from '../../utils/usePersistedState'
import { Page } from '../../styles/styles'
import { lightTheme } from '../../styles/themes/lightTheme'
import { darkTheme } from '../../styles/themes/darkTheme'
import GlobalStyle from '../../styles/global'

const Home = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme)
    console.log('toogled')
    console.log(theme)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header toggleTheme={toggleTheme} />
        <Title />
        <ToDoList />
      </Page>
    </ThemeProvider>
  )
}

export default Home
