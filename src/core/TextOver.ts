import styled from 'styled-components'

interface TextOverProps {
  row: number
}

const TextOver = (props: TextOverProps) => {
  const { row } = props

  const one = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `

  const multiple = styled.div<TextOverProps>`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: ${(props) => props.row};
    line-clamp: ${(props) => props.row};
    -webkit-box-orient: vertical;
  `

  return row > 1 ? multiple : one
}

export default TextOver
