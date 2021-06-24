import Select from '/components/Select'
import Input from '/components/Input'
import styled from 'styled-components'

export default function Filter({ query, platforms, orders, onFilter }) {
  return (
    <FilterBox>
      <div>
        <Select
          name="platforms"
          value={query.platforms}
          options={platforms}
          onChange={onFilter}
          label="Фильтр по платформам"
        />
      </div>
      <SearchBox>
        <Input
          name="search"
          type="text"
          value={query.search}
          onChange={onFilter}
          label="Поиск"
        />
      </SearchBox>
      <div>
        <Select
          name="ordering"
          value={query.ordering}
          options={orders}
          onChange={onFilter}
          label="Сортировка"
        />
      </div>
    </FilterBox>
  )
}

const FilterBox = styled.div`
  padding: 15px 0 15px 0;
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`
const SearchBox = styled.div`
  flex-grow: 1;
`
