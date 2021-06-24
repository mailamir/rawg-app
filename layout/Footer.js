import styled from 'styled-components'
import { JustifyContentBetween } from '/components/styled/Flex'

export default function Footer() {
  return (
    <FooterStyled>
      <JustifyContentBetween>
        <small>{" "}</small>
      </JustifyContentBetween>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  padding: 10px 0;
`
