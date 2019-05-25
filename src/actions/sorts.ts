import * as types from '../constants'

export const changeSortOrder = (name: string, column: string) => ({
  type: types.CHANGE_SORT_ORDER,
  payload: { name, column },
});
