import React, { useState } from 'react'

const HigherOrderComponents =  ( Components , value ) => {
    const HOC =  ()=> {
      const [ number, setNumber ] = useState(0);
      const incrementValueByRandom = () => setNumber( number + value )
    return <Components number = {number} incrementValueByRandom = {incrementValueByRandom}  />
  }
  return HOC
}

export default HigherOrderComponents