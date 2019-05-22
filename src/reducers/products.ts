import * as types from '../constants';

const initialState: any = [];

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.ASYNC_GET_TICKETS_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default: return state;
  }
}

export const getProduct = (state: any, id: number) => state.byId[id];