import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

function RelatedProducts() {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item)=><Item key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default RelatedProducts
