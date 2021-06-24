import styled from 'styled-components'

export default function Select(props) {
  const { name, value, options, onChange, label } = props

  return (
    <>
      {label && <Label>{label}</Label>}
      <SelectStyled name={name} value={value} onChange={onChange}>
        <option value="">--</option>
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </SelectStyled>
    </>
  )
}

const SelectStyled = styled.select`
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
