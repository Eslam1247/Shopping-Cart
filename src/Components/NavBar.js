import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'
import handleCart from './Reducers/handleCartReducer'
const NavBar = () => {

  const cartLength = useSelector((state) => state.Cart)

  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
  <div className="container">
    <Link className="navbar-brand fw-bold fs-4" to="/">
     MY STORE
   </Link>


      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active fs-4" aria-current="page" >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link fs-4" >Products</Link>
        </li>
      </ul>
      <div className="buttons">
          <Link to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i>
            Cart ({cartLength.length })
          </Link>
        
      </div>
    </div>
</nav>

    </div>
  )
}

export default NavBar
