import { combineReducers } from 'redux';

import { InterfaceStore } from  '../@types';
import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';

const rootReducer = combineReducers({
  cart,
  products,
});

export default rootReducer;

const getAddedIds = (state: InterfaceStore) => fromCart.getAddedIds(state.cart)
const getQuantity = (state: InterfaceStore, id: number) => fromCart.getQuantity(state.cart, id)
const getProduct = (state: InterfaceStore, id: number) => fromProducts.getProduct(state.products, id)

export const getCartProducts = (state: InterfaceStore) =>
  getAddedIds(state).map((id: number) => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))

export const getTotal = (state: InterfaceStore) =>
  getAddedIds(state)
    .reduce((total: number, id: number) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2);
