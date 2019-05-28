import * as types from '../constants'

type ProductIdType = number;

export const addToCart = (productId: ProductIdType) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const multipleAddToCart = (productsIds: ProductIdType[]) => ({
  type: types.MULTIPLE_ADD_TO_CART,
  productsIds,
});

export const removeFromCart = (productId: ProductIdType) => ({
  type: types.REMOVE_FROM_CART,
  productId,
});

export const incrementCartItemQuantity = (productId: ProductIdType) => ({
  type: types.INCREMENT_CART_ITEM_QUANTITY,
  productId,
});

export const decrementCartItemQuantity = (productId: ProductIdType) => ({
  type: types.DECREMENT_CART_ITEM_QUANTITY,
  productId,
});
