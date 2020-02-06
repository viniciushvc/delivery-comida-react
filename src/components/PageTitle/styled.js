import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin: ${props => (props.margin ? 0 : props.margin + 'px')};
`
