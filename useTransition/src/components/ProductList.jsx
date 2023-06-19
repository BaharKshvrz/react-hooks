import React from 'react'

const ProductList = ({products}) => {
  return (
    <div>
       {products.map(product => <div key={product}>{product}</div>)}
    </div>
  )
}

export default ProductList
