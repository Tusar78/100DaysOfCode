import React from 'react'
import Clock from './Clock'

const ClockList = ({ quantities }) => {
  return (
    <div>
      {
        quantities.map(quantity => <Clock key={quantity} />)
      }
    </div>
  )
}

export default ClockList