import React, { useContext, useState } from 'react'
import Switch from 'react-switch'
import { StyledHeader } from './Header.style'
import { ThemeContext } from 'styled-components'
import { darkTheme } from '../../styles/themes/darkTheme'
import { lightTheme } from '../../styles/themes/lightTheme'

const Header = (props: any) => {
  const { colors, title } = useContext(ThemeContext)
  // const [theme, setTheme] = useState(lightTheme)

  // const toggleTheme = () => {
  //   setTheme(theme.title === 'light' ? darkTheme : lightTheme)
  //   console.log('toogled')
  //   console.log(theme)
  // }
  const { toggleTheme } = props

  return (
    <StyledHeader>
      <div>
        TO DO
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={colors.white}
          onColor={colors.primary}
        />
      </div>
    </StyledHeader>
  )
}

export default Header
