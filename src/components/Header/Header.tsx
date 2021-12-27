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
        <b>TO DO</b>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '5em',
          }}
        >
          {title === 'light' ? '☽  ' : '☀   '}

          <Switch
            onChange={toggleTheme}
            checked={title === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={colors.secondary}
            offHandleColor={colors.secondaryBright}
            onColor={colors.secondaryBright}
          />
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
