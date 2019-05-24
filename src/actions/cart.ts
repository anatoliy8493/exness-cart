import * as types from '../constants'

export const addToCart = (productId: number) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const removeFromCart = (productId: number) => ({
  type: types.REMOVE_FROM_CART,
  productId,
});

export const incrementCartItemQuantity = (productId: number) => ({
  type: types.INCREMENT_CART_ITEM_QUANTITY,
  productId,
});

export const decrementCartItemQuantity = (productId: number) => ({
  type: types.DECREMENT_CART_ITEM_QUANTITY,
  productId,
});
