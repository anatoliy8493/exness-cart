import { combineReducers } from 'redux';
import { map, sortBy, reduce } from 'lodash';

import cart, * as fromCart from './cart';
import { InterfaceStore } from  '../@types';
import sorts, * as fromSorts from './sorts';
import products, * as fromProducts from './products';

const rootReducer = combineReducers({
  cart,
  sorts,
  products,
});

export default rootReducer;

const getAddedIds = (state: InterfaceStore) => fromCart.getAddedIds(state.cart);
const getQuantity = (state: InterfaceStore, id: number) => fromCart.getQuantity(state.cart, id);
const getProduct = (state: InterfaceStore, id: number) => fromProducts.getProduct(state.products, id);

export const getCartSort = (state: InterfaceStore) => fromSorts.getSorts(state.sorts, 'cart');

export const getCartProducts = (state: InterfaceStore) => {
  return map(getAddedIds(state), (id: number) => {
    return {
      ...getProduct(state, id),
      quantity: getQuantity(state, id),
    };
  });
};

export const getSortedCartProducts = (state: InterfaceStore) => {
  const sort = getCartSort(state);
  const products = getCartProducts(state);
  const sortedProducts = sortBy(products, [`${sort.column}`]);

  if (sort.sortOrder === 'descending') return sortedProducts.reverse();

  return sortedProducts;
};

export const getTotal = (state: InterfaceStore) => {
  return reduce(getAddedIds(state), (total: number, id: number) =>
    total + getProduct(state, id).price * getQuantity(state, id),
    0,
  );
};
