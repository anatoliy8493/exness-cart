import * as types from '../constants';
import { ISortsStore } from '../@types';
import { SortNameType, SortsActionTypes, SortOrderType } from '../actions/sorts';

const initialState: ISortsStore = {
  cart: {
    column: null,
    sortOrder: null,
  },
};

const sorts = (state: ISortsStore = initialState, action: SortsActionTypes): ISortsStore => {
  switch (action.type) {
    case types.CHANGE_SORT_ORDER: {
      const { name, column } = action;

      if (state[name].column !== column) {
        return { ...state, [name]: { column, sortOrder: 'descending' } };
      }

      let newSortOrder: SortOrderType;

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
      const { name } = action;

      return { ...state, [name]: initialState[name] };
    }

    default: return state;
  }
};

export const getSorts = (state: ISortsStore, name: SortNameType) => state[name];

export default sorts;
