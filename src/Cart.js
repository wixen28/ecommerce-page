
import './Cart.css'
import sneakers from '../images/image-product-1-thumbnail.jpg'
import trashcan from '../images/icon-delete.svg'
import {useState} from 'react'

const Cart = ({cartCount, setCartCount}) => {
  const [multiplyCount, setMultiplyCount] = useState(125)
  let result;

/* multiply price based on order count fc */
const multiply = () => {
  result = multiplyCount * cartCount
  return result
}

multiply()
  return  <div id="cart">
    <h2 className="cart-header">Cart</h2>
    <hr className='cart-hr'/>
    {
      cartCount === 0 ? (
        <p className="empty-cart">your cart is empty.</p>
      ) : (
        <div className="cart-info-withBtn">
          <div className="cart-info">
            <img src={sneakers} alt="" className="cart-image" />
            <div className="cart-info-text">
              <p className="sneakers-para">fall limited edition sneakers</p>
              <div className="cart-info-below">
                <p className="cart-price">$125.00 x</p>
                <p className="cart-multiply">{cartCount}</p>
                <p className="cart-total-price">{`$ ${result}.00`}</p>
              </div>
          </div>
          <img src={trashcan} alt="" className='trash' onClick={() => setCartCount(0)}/>
          </div>
          <button className="cart-button">Checkout</button>
        </div>
      )
    }
    
    {/* <button className="cart-button">Checkout</button> */}

  </div>
}

export default Cart