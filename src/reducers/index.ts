import { combineReducers } from 'redux';

import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';

const rootReducer = combineReducers({
  cart,
  products,
});

export default rootReducer;

const getAddedIds = (state: any) => fromCart.getAddedIds(state.cart)
const getQuantity = (state: any, id: number) => fromCart.getQuantity(state.cart, id)
const getProduct = (state: any, id: number) => fromProducts.getProduct(state.products, id)

export const getCartProducts = (state: any) =>
  getAddedIds(state).map((id: number) => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
