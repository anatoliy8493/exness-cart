import * as types from '../constants'

export const changeSortOrder = (name: string) => ({
  type: types.CHANGE_SORT_ORDER,
  name,
});
