import { map, reduce } from 'lodash';
import { combineReducers } from 'redux';

import { ASYNC_GET_PRODUCTS_SUCCESS } from '../constants';
import { ProductInterface, ProductInterfacesState } from  '../@types';

type Action = {
  type: string;
  productId?: number;
  products: ProductInterface[];
}

type State = {
  [key: number]: ProductInterface;
}

const byId = (state: State = {}, action: Action) => {
  switch (action.type) {
    case ASYNC_GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...reduce(action.products, (obj: State, product: ProductInterface) => {
          obj[product.id] = product;

          return obj;
        }, {})
      };

    default: return state;
  }
}

const visibleIds = (state = [], action: Action) => {
  switch (action.type) {
    case ASYNC_GET_PRODUCTS_SUCCESS: return map(action.products, (product: ProductInterface) => product.id);

    default: return state;
  }
}

export default combineReducers({
  byId,
  visibleIds,
})

export const getProduct = (state: ProductInterfacesState, id: number) => state.byId[id];

export const getVisibleProducts = (state: ProductInterfacesState) =>
  map(state.visibleIds, (id: number) => getProduct(state, id));
