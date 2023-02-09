import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Products from './Products'
import ProductView from './Product-view'
import { Routes ,Route } from 'react-router-dom';
import Cart from './Cart'

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductView/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App
