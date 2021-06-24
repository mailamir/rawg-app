import styled from 'styled-components'

export default function Callout({ color, children }) {
  return <CalloutStyled color={color}>{ children }</CalloutStyled>
}

const CalloutStyled = styled.div`
  padding: 12px 20px;
  background-color: ${({ color, theme }) => theme.colors[color]};
`