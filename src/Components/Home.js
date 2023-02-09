import React from 'react';
import Products from './Products'
const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white boder-0">
        <img src="./assets/cover2.jfif" className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-dark">
                New Season Arrivals
            </h5>
            <p className="card-text text-dark fs-2">
                Check Out All The Trends
            </p>
          </div>
        </div>
     </div>
     <Products />
    </div>
  )
}

export default Home
