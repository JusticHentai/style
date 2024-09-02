import styled from 'styled-components'

interface ContainerProps {
  type?: 'r' | 'a' | 'f'
  size?: 'x' | 'y' | 'xy' | 'none'
}

const Container = styled.div<ContainerProps>`
  position: ${(props) => props.type};
  width: 100%;
  height: 100%;
`

const Container = (props: ContainerProps) => {
  const { type = 'r', size = 'x' } = props

  const typeMap = {
    r: styled.div`
      position: relative;
    `,
    a: styled.div`
      position: absolute;
    `,
    f: styled.div`
      position: fixed;
    `,
  }

  const sizeMap = {
    x: styled.div`
      width: 100%;
    `,
    y: styled.div`
      height: 100%;
    `,
    xy: styled.div`
      width: 100%;
      height: 100%;
    `,
    none: styled.div``,
  }

  const typeRes = typeMap[type]
  const sizeRes = sizeMap[size]

  return styled.div`
    ${typeRes}
  `
}

export default Container
