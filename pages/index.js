// react
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// utils
import { get, fetch } from '/service'
import { isObjEmpty } from '/config'

// components
import InfiniteScroll from '/components/InfiniteScroll'
import Callout from '/components/Callout'
import ProgressBar from '/components/ProgressBar'
import Filter from '/layout/Filter'
import Grid from '/layout/Grid'

function Games({ games, platforms }) {
  // hooks
  const router = useRouter()

  // state
  const [nextPage, setNextPage] = useState(null)
  const [more, setMore] = useState([])
  const [query, setQuery] = useState(router.query)

  // vars
  const orders = [
    { name: 'Рейтинг по-возрастанию', id: 'rating' },
    { name: 'Рейтинг по-убыванию', id: '-rating' },
    { name: 'Дата релиза по-возрастанию', id: 'released' },
    { name: 'Дата релиза по-убыванию', id: '-released' },
  ]

  // handler
  const handleQuery = (e) => {
    const { name, value } = e.target

    const query = {
      ...router.query,
      [name]: value,
    }

    !value && delete query[name]

    router.push({ pathname: '/', query })
    setQuery(query)
  }

  const handleLoadMore = async () => {
    if (nextPage) {
      const latest = await fetch(nextPage)
      setNextPage(latest.next)
      setMore([...more, ...latest.results])
    } else {
      setNextPage(null)
    }
  }

  useEffect(() => {
    setNextPage(games.next)
    setMore(games.results)
  }, [games])

  return (
    <>
      <Filter
        query={query}
        platforms={platforms.results}
        orders={orders}
        onFilter={handleQuery}
      />

      {more.length === 0 ? (
        <Callout color="danger">Ничего не найдено! Уточните запрос</Callout>
      ) : (
        <InfiniteScroll
          hasMore={!!nextPage}
          loadMore={handleLoadMore}
          progress={<ProgressBar />}
        >
          <Grid items={more} />
        </InfiniteScroll>
      )}
    </>
  )
}

export async function getServerSideProps({ query }) {
  const initGameParams = { page: 1 }

  const gameParams = isObjEmpty(query) ? initGameParams : query

  const [games, platforms] = await Promise.all([
    get('/games', gameParams),
    get('/platforms'),
  ])

  return {
    props: { games, platforms },
  }
}

export default Games
