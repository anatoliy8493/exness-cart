import { combineReducers } from 'redux';
import { map, sortBy, reduce } from 'lodash';

import cart, * as fromCart from './cart';
import { IStore } from  '../@types';
import sorts, * as fromSorts from './sorts';
import products, * as fromProducts from './products';

const rootReducer = combineReducers({
  cart,
  sorts,
  products,
});

export default rootReducer;

const getAddedIds = (state: IStore) => fromCart.getAddedIds(state.cart);
const getQuantity = (state: IStore, id: number) => fromCart.getQuantity(state.cart, id);
const getProduct = (state: IStore, id: number) => fromProducts.getProduct(state.products, id);

export const getCartSort = (state: IStore) => fromSorts.getSorts(state.sorts, 'cart');

export const getCartProducts = (state: IStore) => {
  return map(getAddedIds(state), (id: number) => {
    return {
      ...getProduct(state, id),
      quantity: getQuantity(state, id),
    };
  });
};

export const getSortedCartProducts = (state: IStore) => {
  const sort = getCartSort(state);
  const products = getCartProducts(state);
  const sortedProducts = sortBy(products, [`${sort.column}`]);

  if (sort.sortOrder === 'descending') return sortedProducts.reverse();

  return sortedProducts;
};

export const getTotal = (state: IStore) => {
  return reduce(getAddedIds(state), (total: number, id: number) =>
    total + getProduct(state, id).price * getQuantity(state, id),
    0,
  );
};
