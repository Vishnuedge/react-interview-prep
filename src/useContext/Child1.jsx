import React, { useContext } from 'react'
import {Context} from './Context'
const Child1 = () => {
    const [ value , setValue ] = useContext(Context)
  return (
    <div>
        <h1>Name : {value.name}</h1>
    </div>
  )
}

export default Child1