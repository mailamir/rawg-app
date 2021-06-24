// styled
import styled from 'styled-components'

// utils
import { get } from '/service'
import { formatDate, createMarkup } from '/config'

// components
import Carousel from '/components/Carousel'
import Button from '/components/Button'

export default function Game({ game, screenshots }) {
  const handleGoTo = () => {
    window.location = game.website
  }

  return (
    <Flex>
      <Left>
        <Title>{game.name}</Title>
        <Description dangerouslySetInnerHTML={createMarkup(game.description)} />
        <Carousel items={screenshots.results} />
      </Left>
      <Right>
        {game.website && (
          <Param>
            <div> </div>
            <Button onClick={handleGoTo}>Перейти на сайт</Button>
          </Param>
        )}

        <Param>
          <div>Дата релиза:</div>
          <div>{game.released ? formatDate(game.released) : 'Нет данных'}</div>
        </Param>
        <Param>
          <div>Рейтинг:</div>
          <Round>{game.rating || 'Нет данных'}</Round>
        </Param>
      </Right>
    </Flex>
  )
}

export async function getServerSideProps({ params }) {
  const [game, screenshots] = await Promise.all([
    get(`/games/${params.slug}`),
    get(`/games/${params.slug}/screenshots`),
  ])

  return {
    props: { game, screenshots },
  }
}


const Flex = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 30%;
    grid-gap: 20px;
  }
`
const Left = styled.div`
  padding: 0;
`
const Right = styled.div`
  padding: 0;
`
const Title = styled.h2`
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`
const Description = styled.div`
  margin-bottom: 35px;
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
