
import * as types from '../constants';

export const addToCart = (productId: number) => ({
  type: types.ADD_TO_CART,
  payload: { productId },
})
