

import './Navbar.css'
import sneakersLogo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import hamburger from '../images/icon-menu.svg'
import closeHamburger from '../images/icon-close.svg'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const Navbar = ({showMenu, setShowMenu, cartCount, setCartCount}) => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  /* showing mobile menu function */
  const showingMenu = () => {
    setShowMenu(!showMenu)
    setActiveMenu(!activeMenu)
  }
  /* showing cart function */
  const handleCart = () => {
    setShowCart(!showCart)
  }

  return <div id='navbar'>
      <nav>
        <div className="desktop-menu">
          <img src={sneakersLogo} alt="" className='desktop-logo'/>
          <ul className="list-items">
            <Link activeClass='active'className='desktop-item'>collections</Link>
            <Link activeClass='active'className='desktop-item'>men</Link>
            <Link activeClass='active'className='desktop-item'>women</Link>
            <Link activeClass='active'className='desktop-item'>about</Link>
            <Link activeClass='active'className='desktop-item'>contact</Link>
          </ul>
          <div className="cart-image">
            <div className="cart-image-order">
              <img src={cart} alt="" className='cart-icon' onClick={handleCart}/>
                <p className="order-num">{cartCount}</p>
            </div>
            {
              showCart && (
                <Cart cartCount={cartCount} setCartCount={setCartCount}/>
              )
            }
            <img src={avatar} alt="" className='avatar'/>
          </div>
        </div>
      {/* mobile nav */}
        <div className="mobile-menu">
          <div className="ham-logo">
            <img alt="" className='nav-icon' onClick={ showingMenu} src={activeMenu? closeHamburger : hamburger} />
            <img src={sneakersLogo} alt="" className='mobile-logo'/>
            <div className="mobile-list" style={{display: showMenu? 'flex' : 'none'}}> 
              <Link activeClass='active'className='mobile-item'>collections</Link>
              <Link activeClass='active'className='mobile-item'>men</Link>
              <Link activeClass='active'className='mobile-item'>women</Link>
              <Link activeClass='active'className='mobile-item'>about</Link>
              <Link activeClass='active'className='mobile-item'>contact</Link>
            </div>
          </div>
          <div className='cart-image-mobile'>
            <div className="cart-image-order">
              <img src={cart} alt="" className='cart-icon-mobile' onClick={handleCart}/>
              <p className="order-num">{cartCount}</p>
            </div>
            {
              showCart && (
                <Cart cartCount={cartCount} setCartCount={setCartCount}/>
              )
            }
            <img src={avatar} alt="" className='avatar-mobile'/>
          </div>
        </div>
      </nav>
  </div>
}

export default Navbar