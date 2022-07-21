import React from 'react'
import HigherOrderComponents from './HigherOrderComponents'

const ComponentTwo = ({ incrementValueByRandom , number }) => {
  return (
    <div>
        <p>{number}</p>
        <button onClick={incrementValueByRandom} >Add 2</button>
    </div>
  )
}

export default HigherOrderComponents(ComponentTwo , 2)