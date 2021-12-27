import { useRef } from 'react'
import { StyledTitle } from './Title.style'
import ContentEditable from 'react-contenteditable'
import usePersistedState from '../../utils/usePersistedState'
import { TitleWrapper } from '../../styles/styles'

const Title = () => {
  const html = useRef('Click to add a list title')
  const [text, setText] = usePersistedState<any>('title', html)

  const handleChange = (e) => {
    html.current = e.target.value
    setText(html.current)
  }

  return (
    <StyledTitle>
      <TitleWrapper>
        <ContentEditable
          html={(html.current = text)}
          onChange={handleChange}
        ></ContentEditable>
      </TitleWrapper>
    </StyledTitle>
  )
}

export default Title
