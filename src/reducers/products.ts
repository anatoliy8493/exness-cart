import { map, reduce } from 'lodash';
import { combineReducers } from 'redux';

import { IProduct, IProductsStore } from  '../@types';
import { IProductsAction } from '../actions/products';
import { ASYNC_GET_PRODUCTS_SUCCESS } from '../constants';

const byId = (state: IProductsStore['byId'] = {}, action: IProductsAction) => {
  switch (action.type) {
    case ASYNC_GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...reduce(action.products, (obj: IProductsStore['byId'], product: IProduct) => {
          obj[product.id] = product;

          return obj;
        }, {})
      };

    default: return state;
  }
}

const visibleIds = (state = [], action: IProductsAction) => {
  switch (action.type) {
    case ASYNC_GET_PRODUCTS_SUCCESS: return map(action.products, (product: IProduct) => product.id);

    default: return state;
  }
}

export default combineReducers({
  byId,
  visibleIds,
})

export const getProduct = (state: IProductsStore, id: number) => state.byId[id];

export const getVisibleProducts = (state: IProductsStore) =>
  map(state.visibleIds, (id: number) => getProduct(state, id));
