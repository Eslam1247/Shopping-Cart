// Add to Cart
export const addCart = (product) => {
  return {
    type : 'ADD',
    payload: product
  }
}

// Delete form Cart
export const deleteCart = (product) => {
  return {
    type : 'DELETE',
    payload : product
  }
}
