import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 90%;
  max-width: 500px;
  height: auto;
  margin: 0 auto;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  filter: hue-rotate(${props => props.hue}deg);
  transform: translateX(
    ${props => (props.negative ? '-' : '')} ${props => props.random}%
  );
`

const BullSlice = props => {
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

  return (
    <Image
      src={props.slice}
      random={random}
      negative={bool}
      hue={hue}
      alt="bull slice"
    />
  )
}

const Glitch = props => {
  const [glitching, setGlitching] = React.useState(false)

  React.useEffect(() => {
    //TODO: interval should be long short
    const lowRandom = Math.floor(Math.random() * 600) + 100
    const highRandom = Math.floor(Math.random() * 5000) + 3000
    const timer = glitching ? lowRandom : highRandom
    const interval = setInterval(() => {
      setGlitching(!glitching)
    }, timer)
    return () => clearInterval(interval)
  }, [glitching])

  return (
    <Container>
      {props.slices.map((slice, index) => (
        <BullSlice slice={slice} key={index} glitching={glitching} />
      ))}
    </Container>
  )
}

export default Glitch