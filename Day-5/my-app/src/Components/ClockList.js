import React from 'react'
import Clock from './Clock'

const ClockList = ({ quantities }) => {
  return (
    <>
      {
        quantities.map(quantity => <Clock key={quantity} />)
      }
    </>
  )
}

export default ClockList