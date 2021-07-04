import styled from 'styled-components'

export default function Input(props) {
  const { name, type, value, onChange, label } = props

  return (
    <>
      {label && <Label>{label}</Label>}
      <InputStyled
        name={name}
        type={type || 'text'}
        value={value || ''}
        onChange={onChange}
      />
    </>
  )
}

const InputStyled = styled.input`
  padding: 8px 12px;
  width: 100%;
  margin-bottom: 10px;
  font-size: inherit;
`
const Label = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  margin-bottom: 5px;
`