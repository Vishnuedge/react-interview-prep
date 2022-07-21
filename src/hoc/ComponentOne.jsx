import React from 'react'
import HigherOrderComponents from './HigherOrderComponents'
const ComponentOne = ( { incrementValueByRandom, number }) => {
  return (
    <div>
        <p>{number}</p>
        <button onClick={incrementValueByRandom} >Add 10</button>
    </div>
  )
}

export default HigherOrderComponents(ComponentOne, 10);