import React , {useCallback}from 'react';
import useApi from './CustomHooks/useApi'
import {useParams} from 'react-router'
import {addCart} from './Actions'
import {useDispatch} from 'react-redux'
import Loading  from './Loading'
import {Link} from 'react-router-dom';

const ProductView = () => {
  const {id} = useParams()
    const [data  , loading ] = useApi(`https://fakestoreapi.com/products/${id}`)

      const dispatch = useDispatch()
      const addProduct = (product) => {
         dispatch(addCart(product))
      }


    const ShowProduct = () => {
      return (
        <React.Fragment>
        <div className="col-lg-6 col-md-12 col-sl-12">
            <img className="card-img-top" src={data.image} alt={data.title} height="600rpx" width="600px" />
        </div>
        <div className="col-lg-6 col-md-12 col-sl-12">
            <h4 className="text-uppercase text-black-50">
                {data.category}
            </h4>
            <h1 className="display-5">{data.title}</h1>
            <p className="lead fw-bolder">
                Rating {data.rating && data.rating.rate}
                <i className="fa fa-star m-2"></i>
            </p>
            <h4 className="display-6 fw-bolder my-4">
                ${data.price}
            </h4>
            <p className="lead">
              {data.description}
            </p>
            <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(data)}>
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </Link>
        </div>
        </React.Fragment>
      )
    }

  return (
    <div className="container py-5">
        <div className="row py-4">
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    </div>
  )
}

export default ProductView;
