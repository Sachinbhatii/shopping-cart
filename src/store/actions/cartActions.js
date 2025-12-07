// action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

// action creators
export const addToCart = (product, qty = 1) => (dispatch, getState) => {
  // product: {id, name, price, image, description}
  dispatch({
    type: ADD_TO_CART,
    payload: { product, qty }
  });
};

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { productId }
  });
};

export const updateQuantity = (productId, qty) => (dispatch) => {
  dispatch({
    type: UPDATE_QUANTITY,
    payload: { productId, qty }
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};
