import * as types from '../constants';
import { InterfaceStore } from  '../@types';

type Action = {
  type: string;
  name: 'name' | 'price' | 'quantity' | null;
  sortOrder: 'ascending' | 'descending' | null;
}

type State = {
  name: string | null;
  sortOrder: string | null;
}

const initialState = {
  name: null,
  sortOrder: null,
}

const cartSorts = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.CHANGE_SORT_ORDER: {
      let newSortOrder = 'ascending';

      if (state.name !== action.name) return { ...state, name: action.name, sortOrder: 'ascending' };

      switch (state.sortOrder) {
        case 'ascending':
          newSortOrder = 'descending';
          break;

        case 'descending':
          newSortOrder = 'ascending';
          break;

        default:
          newSortOrder = 'ascending';
          break;
      }

      return { ...state, name: action.name, sortOrder: newSortOrder };
    }

    default: return state;
  }
}

export const getCartSorts = (state: InterfaceStore['cartSorts']) => state;

export default cartSorts;
