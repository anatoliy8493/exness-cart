import { map, sortBy } from 'lodash';
import { combineReducers } from 'redux';

import cart, * as fromCart from './cart';
import { InterfaceStore } from  '../@types';
import products, * as fromProducts from './products';
import cartSorts, * as fromCartSorts from './cartSorts';

const rootReducer = combineReducers({
  cart,
  products,
  cartSorts,
});

export default rootReducer;

const getAddedIds = (state: InterfaceStore) => fromCart.getAddedIds(state.cart);
const getQuantity = (state: InterfaceStore, id: number) => fromCart.getQuantity(state.cart, id);
const getProduct = (state: InterfaceStore, id: number) => fromProducts.getProduct(state.products, id);

export const getCartSorts = (state: InterfaceStore) => fromCartSorts.getCartSorts(state.cartSorts);

export const getCartProducts = (state: InterfaceStore) => {
  const sorts = getCartSorts(state);

  const products = map(getAddedIds(state), (id: number) => {
    return {
      ...getProduct(state, id),
      quantity: getQuantity(state, id),
    }
  });

  const sortedProducts = sortBy(products, [`${sorts.name}`]);

  if (sorts.sortOrder === 'descending') return sortedProducts.reverse();

  return sortedProducts;
}

export const getTotal = (state: InterfaceStore) =>
  getAddedIds(state)
    .reduce((total: number, id: number) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0,
    );
