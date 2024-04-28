import React from 'react'
import { useSelector } from 'react-redux'

function CartSummary() {
    const all_product=useSelector(store=>store.allProduct)
    const cartItems=useSelector(store=>store.cartProduct)

    const getTotalCartAmount=()=>{
        let totalAmount=0
        for(const item in cartItems){
            let itemInfo=all_product.find((product)=>product.id===Number(item))
            totalAmount+=itemInfo.new_price * cartItems[item]
        }
        return totalAmount
    }

  return (
    <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Card Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
  )
}

export default CartSummary
