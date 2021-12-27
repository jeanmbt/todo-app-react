import React, { useContext, useRef } from 'react'
import { StyledTitle } from './Title.style'
import ContentEditable from 'react-contenteditable'
import usePersistedState from '../../utils/usePersistedState'
import { ThemeContext } from 'styled-components'

const Title = () => {
  const { colors } = useContext(ThemeContext)
  const html = useRef('Click to add a list title')
  const [text, setText] = usePersistedState<any>('title', html)

  const handleChange = (e) => {
    html.current = e.target.value
    setText(html.current)
  }

  return (
    <StyledTitle>
      <div
        style={{
          borderBottom: `1px solid ${colors.secondary}`,
          minWidth: '2em',
          maxWidth: '80vw',
        }}
      >
        <ContentEditable
          html={(html.current = text)}
          onChange={handleChange}
        ></ContentEditable>
      </div>
    </StyledTitle>
  )
}

export default Title
