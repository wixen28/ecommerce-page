

import './Navbar.css'
import sneakersLogo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import hamburger from '../images/icon-menu.svg'
import closeHamburger from '../images/icon-close.svg'
import {useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false)

  const showingMenu = () => {
    setShowMenu(!showMenu)
    setActiveMenu(!activeMenu)
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
            <img src={cart} alt="" className='cart-icon' />
            <img src={avatar} alt="" className='avatar'/>
          </div>
        </div>
      {/* mobile nav */}
        <div className="mobile-menu">
          <div className="ham-logo">
            <img alt="" className='nav-icon' onClick={ showingMenu} src={activeMenu? closeHamburger : hamburger}/>
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
            <img src={cart} alt="" className='cart-icon-mobile' />
            <img src={avatar} alt="" className='avatar-mobile'/>
          </div>
        </div>
      </nav>
  </div>
}

export default Navbar