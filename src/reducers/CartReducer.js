
export const CartReducer=(cartState,action)=>{
  switch (action.type) {
    case "getCartData":
        return {...cartState,cart:action.payload}
    case "addToCart":
        return {...cartState,cart:action.payload}  
    case "deleteFromCart":
          return {...cartState,cart:action.payload}   
    case "updateCartQty":
          return {...cartState,cart:action.payload} 
    case "clearCart":
            return {cart:[]}             
        
       

    default:
       return cartState;
}

}

export const initialCartState={cart:[]}; 