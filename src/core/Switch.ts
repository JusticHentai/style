import styled from 'styled-components'

interface SwitchProps {
  show: boolean
}

const Switch = styled.div<SwitchProps>`
  transition: 0.3s opacity ease-in-out;
  opacity: ${(props) => (props.show ? 1 : 0)};
`

export default Switch
