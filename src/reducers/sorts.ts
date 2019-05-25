import * as types from '../constants';
import { InterfaceStore } from '../@types';

type Action = {
  type: string;
  payload: {
    name: 'cart' | string;
    column: string | null;
    sortOrder: 'ascending' | 'descending' | null;
  }
}

const initialState = {
  cart: {
    column: null,
    sortOrder: null,
  },
}

const sorts = (state: InterfaceStore['sorts'] = initialState, action: Action) => {
  switch (action.type) {
    case types.CHANGE_SORT_ORDER: {
      let newSortOrder = 'ascending';

      const { payload: { name, column } } = action;

      if (state[name].column !== column) {
        return { ...state, [name]: { column, sortOrder: 'ascending' } };
      }

      switch (state[name].sortOrder) {
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

      return { ...state, [name]: { column, sortOrder: newSortOrder } };
    }

    default: return state;
  }
}

export const getSorts = (state: InterfaceStore['sorts'], name: string) => state[name];

export default sorts;
