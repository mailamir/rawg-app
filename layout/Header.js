import styled from 'styled-components'
import { JustifyContentBetween } from '/components/styled/Flex'

export default function Header() {
  return (
    <HeaderStyled>
      <JustifyContentBetween>
        <strong>Лого</strong>
        <div>Войти / Регистрация</div>
      </JustifyContentBetween>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  padding: 15px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.danger};
`