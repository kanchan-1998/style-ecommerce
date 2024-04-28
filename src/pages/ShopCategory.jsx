import React from 'react'
import './CSS/ShopCategory.css'
import {useSelector} from 'react-redux'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'

function ShopCategory({banner,category}) {
  const allProduct=useSelector(state=>state.allProduct)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products 
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products-wrapper">
        <div className="shopcategory-products">
          {allProduct.map((item)=>{
            if(category===item.category){
              return <Item key={item.id} item={item}/>
            }
            else{
              return null;
            }
          })}
        </div>
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
      
    </div>
  )
}

export default ShopCategory
