import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItem= () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <div className="cartItem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return (<div>
                            <div className="cartItem-format cartItem-format-main">
                                <img src= {e.image} alt="" className='cartIcon-product-icon'/>
                                <p>{e.name}</p>
                                <p>&#8377;{e.new_price}</p>
                                <button className='cartItem-quantity'>{cartItems[e.id]}</button>
                                <p>&#8377;{e.new_price*cartItems[e.id]}</p>
                                <img src= {remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" className='cartIcon-remove-icon'/>
                            </div>
                            <hr />
                        </div>
                )
            }
            else{
                return null;
            }
        })}
        <div className="cartItem-down">
            <div className="cartItem-total">
                <h1>Cart Total:</h1>
                <div>
                    <div className="cartItem-total-item">
                        <p>
                            Subtotal:
                        </p>
                        <p>
                            &#8377;{getTotalCartAmount()}
                        </p>
                    </div>
                    <hr />
                    <div className="cartItem-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItem-total-item">
                        <h3>Total:</h3>
                        <h3>&#8377;{getTotalCartAmount()}</h3>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
            <div className="cartItem-promo-code">
                <p>If you have a promo code, enter it here:</p>
                <div className="cartItem-promo-box">
                    <input type="text" placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CartItem;