import React , {useState , useEffect}from 'react';
import {addCart , deleteCart} from './Actions'
import {useSelector , useDispatch} from 'react-redux';

const Cart = () => {
  const data = useSelector((state) => state.Cart)
  const dispatch = useDispatch()
  const [count , setCount] = useState([])
  const [products , setProducts] = useState(data)
  const [filterProducts , setFilterProducts] = useState(products)


  const addProduct = (item) => {
    products.forEach(i => i.id === item.id ? setCount(item.quantity = item.quantity + 1 ) : null )
  }

  const deleteProduct = (item ) => {
     products.forEach(i => i.id === item.id ? setCount(item.quantity = item.quantity - 1 ) : count)
     if(count < 1){
       setFilterProducts(data.filter(x => x !== item))
       dispatch(deleteCart(item))
     }
  }


  return (
    <>
      {data.length === 0 ? <h2 className="text-center mt-5">There is no Items</h2> :
       filterProducts.map(item => {
        return (
          <div className="container card mb-3" key={item.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} className="card-img-top" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body ">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}.</p>
                    <small className="text-muted">
                    <h3 className="text-black">{item.quantity} *  ${item.price} =  ${(item.quantity * item.price).toFixed(2)}</h3>
                    <div className="d-grid gap-2 d-md-block" >
                      <button  onClick={() => addProduct(item)} className="btn btn-outline-dark me-5 py-1 fw-bold fs-3" >+</button>
                      <button onClick={() => deleteProduct(item)} className="btn btn-outline-dark  py-1 px-3 fw-bold fs-3" >-</button>
                    </div>
                  </small>
                </div>
              </div>
          </div>
        </div>
        )
      })}
    </>
  )
}

export default Cart
