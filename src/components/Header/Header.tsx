import React, { useContext } from 'react'
import Switch from 'react-switch'
import { StyledHeader } from './Header.style'
import { ThemeContext } from 'styled-components'

const Header = (props: any) => {
  const { colors, title } = useContext(ThemeContext)
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
