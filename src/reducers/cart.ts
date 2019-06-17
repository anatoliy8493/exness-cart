import { each, omit, filter, union, clone } from 'lodash';

import * as types from '../constants';
import { ICartStore } from  '../@types';
import { CartActionsTypes } from '../actions/cart';
import { ProductIdType } from '../actions/products';

const initialState: ICartStore = {
  addedIds: [],
  quantityById: {},
}

const addedIds = (state: ICartStore['addedIds'] = initialState.addedIds, action: CartActionsTypes) => {
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

const quantityById = (state: ICartStore['quantityById'] = initialState.quantityById, action: CartActionsTypes) => {
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

      each(productsIds, (productId: ProductIdType) => {
        clonedState[productId] = (clonedState[productId] || 0) + 1;
      });

      return clonedState;
    };

    default: return state;
  }
}

export const getQuantity = (state: ICartStore, productId: ProductIdType) => state.quantityById[productId] || 0;

export const getAddedIds = (state: ICartStore) => state.addedIds;

const cart = (state: ICartStore = initialState, action: CartActionsTypes) => {
  switch (action.type) {
    default: return {
      addedIds: addedIds(state.addedIds, action),
      quantityById: quantityById(state.quantityById, action)
    }
  }
}

export default cart;
