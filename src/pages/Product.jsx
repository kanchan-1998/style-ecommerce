import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import BreadCrums from '../components/Breadcrums/BreadCrums'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DescreptionBox from '../components/DescreptionBox/DescreptionBox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'


function Product() {
  const allProduct=useSelector(state=>state.allProduct)
  const {productId}=useParams()
  const product =allProduct.find((e)=> e.id===Number(productId))
  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <DescreptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
