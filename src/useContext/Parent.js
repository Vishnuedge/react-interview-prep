import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Store from './Context'

const Parent = () => {

  return (
    <Store>
        <h1>Use Context</h1>
        <Child1 />
        <Child2 />
    </Store>
  )
}

export default Parent