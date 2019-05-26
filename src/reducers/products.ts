import { map, reduce } from 'lodash';
import { combineReducers } from 'redux';

import { ASYNC_GET_PRODUCTS_SUCCESS } from '../constants';
import { InterfaceProduct, InterfaceProductsState } from  '../@types';

type Action = {
  type: string;
  productId?: number;
  products: InterfaceProduct[];
}

type State = {
  [key: number]: InterfaceProduct;
}

const byId = (state: State = {}, action: Action) => {
  switch (action.type) {
    case ASYNC_GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...reduce(action.products, (obj: State, product: InterfaceProduct) => {
          obj[product.id] = product;

          return obj;
        }, {})
      };

    default: return state;
  }
}

const visibleIds = (state = [], action: Action) => {
  switch (action.type) {
    case ASYNC_GET_PRODUCTS_SUCCESS: return map(action.products, (product: InterfaceProduct) => product.id);

    default: return state;
  }
}

export default combineReducers({
  byId,
  visibleIds,
})

export const getProduct = (state: InterfaceProductsState, id: number) => state.byId[id];

export const getVisibleProducts = (state: InterfaceProductsState) =>
  map(state.visibleIds, (id: number) => getProduct(state, id));
