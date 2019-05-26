import * as types from '../constants';
import { InterfaceSortsState } from '../@types';

type Action = {
  type: string;
  payload: {
    name: 'cart' | string;
    column: string | null;
    sortOrder: 'ascending' | 'descending' | null;
  }
}

const initialState: InterfaceSortsState = {
  cart: {
    column: null,
    sortOrder: null,
  },
};

const sorts = (state: InterfaceSortsState = initialState, action: Action) => {
  switch (action.type) {
    case types.CHANGE_SORT_ORDER: {
      const { payload: { name, column } } = action;

      if (state[name].column !== column) {
        return { ...state, [name]: { column, sortOrder: 'descending' } };
      }

      let newSortOrder: string;

      switch (state[name].sortOrder) {
        case 'descending':
          newSortOrder = 'ascending';
          break;

        default:
          newSortOrder = 'descending';
          break;
      }

      return { ...state, [name]: { column, sortOrder: newSortOrder } };
    }

    case types.RESET_SORT: {
      const { payload: { name } } = action;

      return { ...state, [name]: initialState[name] };
    }

    default: return state;
  }
};

export const getSorts = (state: InterfaceSortsState, name: string) => state[name];

export default sorts;
