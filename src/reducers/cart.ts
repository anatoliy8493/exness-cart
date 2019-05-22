import * as types from '../constants';

type Action = {
  type: string,
  payload: {
    productId: never,
  }
}

type State = {
  addedIds: number[];
  quantityById: number;
}

const initialState = {
  addedIds: [],
  quantityById: {},
}

const addedIds = (state = initialState.addedIds, action: Action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      if (state.indexOf(action.payload.productId) !== -1) {
        return state
      }
      return [...state, action.payload.productId];

    default: return state;
  }
}

const quantityById = (state = initialState.quantityById, action: Action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const { payload: { productId } } = action;

      return { ...state, [productId]: (state[productId] || 0) + 1 };

    default: return state;
  }
}

export const getQuantity = (state: any, productId: number) => state.quantityById[productId] || 0;

export const getAddedIds = (state: any) => state.addedIds;

const cart = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default cart;
