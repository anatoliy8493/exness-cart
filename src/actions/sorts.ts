import * as types from '../constants'

export const changeSortOrder = (name: string, column: string) => ({
  type: types.CHANGE_SORT_ORDER,
  payload: { name, column },
});

export const resetSort = (name: string) => ({
  type: types.RESET_SORT,
  payload: { name },
});
