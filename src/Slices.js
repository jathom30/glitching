import React from 'react'
import styled from 'styled-components'

const SliceContainer = styled.div`
  position: relative;
  height: ${props => props.height}px;
  overflow: hidden;
  .slice {
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: ${props => props.overallHeight}px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-${props => props.top}px) translateX(${props => (props.negative ? '-' : '')}${props => props.random}%);
    filter: hue-rotate(${props => props.hue}deg);
    }
`

const Slice = props => {
  const [random, setRandom] = React.useState(0)
  const [hue, setHue] = React.useState(0)
  const [bool, setBool] = React.useState(false)

  const glitch = () => {
    const bool = Math.floor(Math.random() * 2) !== 0 ? true : false
    setRandom(Math.floor(Math.random() * 25) + 1) // sets translateX distance
    setBool(bool) //sets positive or negative translateX
    setHue(Math.floor(Math.random() * 361))
  }

  const normal = () => {
    setRandom(0)
    setBool(true)
    setHue(0)
  }

  React.useEffect(() => {
    const randomInterval = Math.floor(Math.random() * 1000) + 1
    const interval = setInterval(() => {
      props.glitching ? glitch() : normal()
    }, randomInterval)
    return () => clearInterval(interval)
  })

  return(
    <SliceContainer
      key={props.index}
      glitching={props.glitching}
      height={props.height} top={props.top}
      overallHeight={props.overallHeight}
      random={random}
      negative={bool}
      hue={hue}
      image={props.image}
    >
      <div className="slice" />
    </SliceContainer>
  )
}

const Slices = props => {
  const [heightOffset, setHeightOffset] = React.useState([])
  const [glitching, setGlitching] = React.useState(false)

  React.useEffect(() => {
    const lowRandom = Math.floor(Math.random() * 600) + 100
    const highRandom = Math.floor(Math.random() * 3000) + 1000
    const timer = glitching ? lowRandom : highRandom
    const interval = setInterval(() => {
      setGlitching(!glitching)
    }, timer)
    return () => clearInterval(interval)
  }, [glitching])


  React.useEffect(() => {
    let heightOffset = []
    const randomHeight = maxHeight => {
      for (let i=0; i<maxHeight;) {
        const height = Math.floor(Math.random() * 20) + 5 // random height between 10px and 30px
        const newHeightOffset = {height: height, offset: i}
        heightOffset.push(newHeightOffset)
        i += height
      }
      setHeightOffset(heightOffset)
    }
    randomHeight(props.height)
  },[props.height])

  return(
    <div style={{maxWidth: '50%', margin: '0 auto', padding: 10}}>
      {
        heightOffset.map((object, index) => (
          <Slice key={index} glitching={glitching} height={object.height} top={object.offset} overallHeight={props.height} image={props.image} />
        ))
      }
    </div>
  )
}

export default Slices