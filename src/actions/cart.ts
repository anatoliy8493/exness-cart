import * as types from '../constants'

export const addToCart = (productId: number) => ({
  type: types.ADD_TO_CART,
  productId,
})

export const removeFromCart = (productId: number) => ({
  type: types.REMOVE_FROM_CART,
  productId,
})
