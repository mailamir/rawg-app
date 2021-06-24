// next
import Link from 'next/link'
import Image from 'next/image'

// styled
import styled from 'styled-components'

// utils
import noImg from '/public/no-image.jpg'
import { formatDate } from '/config'

export default function Grid({ items }) {
  return (
    <GridStyled>
      {items.map((item) => (
        <GridItem key={item.id}>
          <Image
            src={item.background_image || noImg}
            alt={item.name}
            width={400}
            height={400}
            layout="intrinsic" //responsive
          />
          <Meta>
            <Title>
              <Link href={`/game/${item.slug}`}>{item.name}</Link>
            </Title>
            <Param>
              <div>Дата релиза:</div>
              <div>
                {item.released ? formatDate(item.released) : 'Нет данных'}
              </div>
            </Param>
            <Param>
              <div>Рейтинг:</div>
              <Round>{item.rating || '-'}</Round>
            </Param>
          </Meta>
        </GridItem>
      ))}
    </GridStyled>
  )
}

const GridStyled = styled.div`
  @media (min-width: 400px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }
`
const GridItem = styled.div`
  background-color: #202020;
`
const Meta = styled.div`
  padding: 0 15px;
`
const Title = styled.h3`
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.danger};
`
const Param = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  font-size: 0.9rem;
`
const Round = styled.div`
  display: inline-block;
  border-radius: 100%;
  text-align: center;
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: .8rem;
  background-color: ${({ theme }) => theme.colors.danger};
`
