import React from 'react'
import Clock from './Clock'

const ClockList = ({ quantities }) => {
  return (
    <>
      {
        quantities.map((key) => <Clock key={key} />)
      }
    </>
  )
}

export default ClockList