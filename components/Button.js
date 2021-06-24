import styled from 'styled-components'

export default function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 15px;
  margin: 0 15px 15px 0;
  outline: none;
  border: none;
  border-radius: 4px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  background-color: #1a73e8;
  position: relative;
  overflow: hidden;
  vertical-align: top;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  z-index: 1;
  :hover {
    box-shadow: 0 1px 2px 0 rgb(26 115 232 / 45%),
      0 1px 3px 1px rgb(26 115 232 / 30%);
    background-color: #297be6;
  }
  :active {
    box-shadow: 0 1px 2px 0 rgb(26 115 232 / 45%),
      0 2px 6px 2px rgb(26 115 232 / 30%);
    background-color: #1a73e8 !important;
  }
  :disabled {
    pointer-events: none;
    opacity: 0.65;
  }
`
