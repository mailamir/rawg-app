import { useState } from 'react'
import Image from 'next/image'

import styled from 'styled-components'

import Carousel from '/layout/Carousel'

export default function CarouselSimple({ items }) {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <Slider>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: '100%',
            position: 'relative',
          },
        }}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: '>',
          style: {
            position: 'absolute',
            width: 30,
            height: 30,
            right: 5,
            top: '50%',
            marginTop: -15,
            zIndex: 9,
          },
        }}
        backwardBtnProps={{
          children: '<',
          style: {
            position: 'absolute',
            width: 30,
            height: 30,
            left: 5,
            top: '50%',
            marginTop: -15,
            zIndex: 9,
          },
        }}
        itemsToShow={1}
        speed={400}
      >
        {items.map((it) => (
          <Slide key={it.id}>
            <Image
              src={it.image} 
              alt={it.name} 
              width={800} 
              height={400} 
              layout="responsive" //intrinsic 
            />
          </Slide>
        ))}
      </Carousel>
    </Slider>
  )
}

const Slider = styled.div`
  margin-bottom: 35px;
`
const Slide = styled.div`
  width: 60vw;
  text-align: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.gray};
`
