import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CLEAR_CART
} from '../actions/cartActions';

const initialState = {
  items: {
    // productId: { product, qty, lineTotal }
  }
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, qty } = action.payload;
      const existing = state.items[product.id];
      const newQty = existing ? existing.qty + qty : qty;
      return {
        ...state,
        items: {
          ...state.items,
          [product.id]: {
            product,
            qty: newQty,
            lineTotal: +(product.price * newQty).toFixed(2)
          }
        }
      };
    }

    case REMOVE_FROM_CART: {
      const { productId } = action.payload;
      const newItems = { ...state.items };
      delete newItems[productId];
      return { ...state, items: newItems };
    }

    case UPDATE_QUANTITY: {
      const { productId, qty } = action.payload;
      if (qty <= 0) {
        // remove
        const newItems = { ...state.items };
        delete newItems[productId];
        return { ...state, items: newItems };
      }
      const existing = state.items[productId];
      if (!existing) return state;
      const product = existing.product;
      return {
        ...state,
        items: {
          ...state.items,
          [productId]: {
            product,
            qty,
            lineTotal: +(product.price * qty).toFixed(2)
          }
        }
      };
    }

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
}
