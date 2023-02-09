import React , {useState , useEffect , useCallback} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import useApi from './CustomHooks/useApi'
import Loading from './Loading';

const Products = () => {

  const [data , loading , filter , setFilter] = useApi("https://fakestoreapi.com/products")


  const filterProducts = (term) => {
      const updateList = data.filter(x => x.category === term)
      setFilter(updateList)
  }

  const per = useCallback(filterProducts , [])

  const ShowProducts = () => {
    return (
      <React.Fragment>
        <div className="buttons mb-5">
            <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
            All
            </button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>
            Men's Clothing
            </button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>
            Women's Clothing
            </button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("jewelery")}>
            Jewelery
            </button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("electronics")}>
            Electronics
            </button>
        </div>
            {filter.map(product => {
              return (
                <div className="col-md-3 mb-3" key={product.id}>
                <div className="card h-100 text-center p-4 ">
                  <img src={product.image} height="250px" className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </Link>
                  </div>
                </div>
                </div>
              )
            })}

      </React.Fragment>
    )
  }

  return (
    <div>
        <div className="container my-5 py-5 text-center">
            <div className="row">
              <div className="col-12 mb-2">
                  <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                  <hr />
              </div>
            </div>
            <div className="row justify-content-center">
              {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    </div>
    )
}

export default Products
