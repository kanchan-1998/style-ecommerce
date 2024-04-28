import React from 'react'
import './CartItems.css'
import {useDispatch, useSelector} from 'react-redux'
import remove_icon from '../Assets/cart_cross_icon.png'
import { cartProductAction } from '../../store/cartProductSlice'
import CartSummary from './CartSummary'

function CartItems() {
    const cartItems= useSelector(state=>state.cartProduct)
    const allProduct= useSelector(state=>state.allProduct)
    const dispatch =useDispatch()
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      
      {allProduct.map((e)=>{
        if(cartItems[e.id]>0){
            {
                return <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{dispatch(cartProductAction.removeFromCart(e.id))}} alt="" />
                    </div>
                    <hr />
                </div>
            }
        }
        return null
      })}

      <CartSummary/>


    </div>
  )
}

export default CartItems
