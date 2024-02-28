

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Cart from './components/Cart'
import {useState} from 'react'

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [count, setCount] = useState(0)
  const [cartCount, setCartCount] = useState(0);


  /* add to cart function */
  const addToCart = () => {
    setCartCount(count)
  }

  return <BrowserRouter>
    <Navbar showMenu={showMenu} setShowMenu={setShowMenu} cartCount={cartCount} setCartCount={setCartCount}/>
    <Main showMenu={showMenu} count={count} setCount={setCount} addToCart={addToCart}/>
  </BrowserRouter>
}

export default App