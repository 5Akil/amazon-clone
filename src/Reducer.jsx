
// initial state
export const initialStatevalue = {
  cart: [],
  user: null,
};

// cart subtotal
export const getCartTotal = (cart) =>
  cart.reduce((amount, item) => item.price + amount, 0);


// reducer function 
const reducer = (state, action) => {
  console.log("to", state, action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
        );

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `can't remove this product as id ${action.id} doesn't exists`
        );
      }
      return { ...state, cart: newCart };
  }
};

export default reducer;





