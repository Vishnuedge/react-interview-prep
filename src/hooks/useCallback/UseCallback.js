import React, { useState, useCallback, useMemo} from 'react'
import Product from './Product'

const ProductLists = () => {
    const [ count , setCount ] = useState(0);
    const [ products ] = useState([ 'Product 1', 'Product 2' ]);
    const [cart , setCart ] = useState(0);
    const handleCount = () => setCount(count + 1)
    const addToCart = useCallback(() => {
        setCart(cart + 1)
    }, [cart])
 
  return (
    <div>
        <h1>Use Callback</h1>
        <p>{count}</p>
        <button onClick={handleCount} >Add Count</button>
        <p>Cart : {cart}</p>
        { products?.map( (product, i) => {
            return (
                <div key = {i}  >
                    <Product name = {product} addToCart = {addToCart}  />
                </div>
            )
        } ) }

    </div>
  )
}

export default ProductLists