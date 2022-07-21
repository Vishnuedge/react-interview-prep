import React, { useContext } from 'react'
import { Context } from './Context'
const Child2 = () => {

    const [value, setValue] = useContext(Context)
  return (
    <div>
        <h6>Name : {value.name}</h6>
    </div>
  )
}

export default Child2