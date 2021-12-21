import React, { useContext } from 'react'
import Switch from 'react-switch'
import { StyledHeader } from './Header.style'
import { ThemeContext } from 'styled-components'

const Header = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <StyledHeader>
      <div>
        TO DO
        <Switch
          onChange={() => {}}
          checked={false}
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
