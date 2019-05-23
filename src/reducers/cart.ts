import { InterfaceStore } from  '../@types';
import { ADD_TO_CART } from '../constants';

type Action = {
  type: string;
  productId: number;
}

const initialState = {
  addedIds: [],
  quantityById: {},
}

const addedIds = (state: number[] = initialState.addedIds, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.includes(action.productId)) return state;

      return [...state, action.productId];

    default: return state;
  }
}

const quantityById = (state: { [key: number]: number } = initialState.quantityById, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action;

      return { ...state, [productId]: (state[productId] || 0) + 1 };

    default: return state;
  }
}

export const getQuantity = (state: InterfaceStore['cart'], productId: number) => state.quantityById[productId] || 0

export const getAddedIds = (state: InterfaceStore['cart']) => state.addedIds;

const cart = (state: InterfaceStore['cart'] = initialState, action: Action) => {
  switch (action.type) {
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart;
