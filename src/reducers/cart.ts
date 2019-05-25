import { each, omit, filter, union, clone } from 'lodash';

import * as types from '../constants';
import { InterfaceStore } from  '../@types';

type Action = {
  type: string;
  productId: number;
  productsIds?: number[];
}

const initialState = {
  addedIds: [],
  quantityById: {},
}

const addedIds = (state: number[] = initialState.addedIds, action: any) => {
  switch (action.type) {
    case types.INCREMENT_CART_ITEM_QUANTITY:
    case types.ADD_TO_CART: {
      if (state.includes(action.productId)) return state;

      return [...state, action.productId];
    }

    case types.REMOVE_FROM_CART: return filter(state, id => id !== action.productId);

    case types.MULTIPLE_ADD_TO_CART: return union(state, action.productsIds);

    default: return state;
  }
}

const quantityById = (state: { [key: number]: number } = initialState.quantityById, action: Action) => {
  switch (action.type) {
    case types.INCREMENT_CART_ITEM_QUANTITY:
    case types.ADD_TO_CART: {
      const { productId } = action;

      return { ...state, [productId]: (state[productId] || 0) + 1 };
    }

    case types.REMOVE_FROM_CART: return omit(state, action.productId);

    case types.DECREMENT_CART_ITEM_QUANTITY: {
      const { productId } = action;

      return { ...state, [productId]: (state[productId] || 0) - 1 };
    }

    case types.MULTIPLE_ADD_TO_CART: {
      const { productsIds } = action;

      const clonedState = clone(state);

      each(productsIds, (productId: number) => {
        clonedState[productId] = (clonedState[productId] || 0) + 1;
      });

      return clonedState;
    };

    default: return state;
  }
}

export const getQuantity = (state: InterfaceStore['cart'], productId: number) => state.quantityById[productId] || 0;

export const getAddedIds = (state: InterfaceStore['cart']) => state.addedIds;

const cart = (state: InterfaceStore['cart'] = initialState, action: Action) => {
  switch (action.type) {
    default: return {
      addedIds: addedIds(state.addedIds, action),
      quantityById: quantityById(state.quantityById, action)
    }
  }
}

export default cart;
