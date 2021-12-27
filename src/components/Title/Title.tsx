import React, { useRef } from 'react'
import { StyledTitle } from './Title.style'
import ContentEditable from 'react-contenteditable'
import usePersistedState from '../../utils/usePersistedState'

const Title = () => {
  const html = useRef('')
  const ref = html.current
  const [text, setText] = usePersistedState<any>('listTitle', ref)
  const handleChange = (e) => {
    html.current = e.target.value
  }

  return (
    <StyledTitle>
      <ContentEditable
        html={(html.current = 'Click to add a list title')}
        onChange={handleChange}
      ></ContentEditable>
    </StyledTitle>
  )
}

export default Title
