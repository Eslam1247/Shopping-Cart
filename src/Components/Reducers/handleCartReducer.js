const cart = []

const handleCart = (state = cart , action) => {
    const product = action.payload
    // Check if the item exist
    const exist = state.find(x => x.id === product.id)
    switch (action.type){
      case 'ADD' :
        if(exist)
        { // Increase the Quantity
          return state.map(x => x.id === product.id ? {... x , quantity : x.quantity + 1} : x)
        }else{
          return [...state , {... product , quantity : 1}]
        }
        break;
      case 'DELETE' :
        if (exist.quantity === 1)
        {
          return state.filter(x => x.id !== product.id )
        }else{
          // Decrease the Quantity
          return state.map(x => x.id === product.id ? {... x , quantity : x.quantity - 1} : x)
        }
        break;
      default:
        return state
      break;
    }

}

export default handleCart
