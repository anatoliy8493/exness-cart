import { combineReducers } from 'redux';

import { InterfaceStore } from  '../@types';
import { ASYNC_GET_PRODUCTS_SUCCESS, ADD_TO_CART } from '../constants';

type Action = {
  type: string;
  productId: number;
}

const products = (state: any, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART: return { ...state, quantity: state.quantity - 1 };

    default: return state;
  }
}

const byId = (state: any = {}, action: any) => {
  switch (action.type) {
    case ASYNC_GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.products.reduce((obj: any, product: any) => {
          obj[product.id] = product;

          return obj;
        }, {})
      };

    default:
      const { productId } = action;

      if (productId) return { ...state, [productId]: products(state[productId], action) };

      return state;
  }
}

const visibleIds = (state = [], action: any) => {
  switch (action.type) {
    case ASYNC_GET_PRODUCTS_SUCCESS: return action.products.map((product: any) => product.id);

    default: return state;
  }
}

export default combineReducers({
  byId,
  visibleIds,
})

export const getProduct = (state: any, id: number) => state.byId[id];

export const getVisibleProducts = (state: any) => state.visibleIds.map((id: number) => getProduct(state, id));
