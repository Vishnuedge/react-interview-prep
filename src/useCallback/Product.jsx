import React from 'react'

const Product = React.memo(({ name , addToCart }) => {
    {console.log('RE-RENDRING PRODUCT')}
    return (
        <>
        <div style={{ padding : '15px', border : '1px solid #000', margin : '10px' }} >{name}</div>
        <button onClick={addToCart} >Add to cart</button>
        </>
  )
})

export default Product