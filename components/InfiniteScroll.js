import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const InfiniteScroll = (props) => {
  const { hasMore, loadMore, progress } = props

  // state
  const [isLoading, setIsLoading] = useState(false)

  // hooks
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(async () => {
    //console.log(hasMore, inView)

    if (!inView || !hasMore) return

    setIsLoading(true)
    await loadMore()
    setIsLoading(false)
  }, [inView])

  return (
    <>
      {props.children}

      {progress && isLoading && progress}

      <div ref={ref} style={{height: 25}} />
    </>
  )
}

export default InfiniteScroll
