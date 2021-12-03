import React, { useState } from 'react'
import { StyledTitle } from './Title.style'
import ContentEditable from 'react-contenteditable'

const Title = () => {
  const [html, setHtml] = useState('')

  const handleChange = (e) => {
    setHtml(html)
  }

  return (
    <StyledTitle>
      <ContentEditable
        html={html == '' ? 'Click to add list title' : html}
        onChange={handleChange}
      ></ContentEditable>
    </StyledTitle>
  )
}

export default Title
