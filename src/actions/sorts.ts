import * as types from '../constants';

export type SortNameType = string;
export type SortColumnNameType = string;
export type SortOrderType = 'ascending' | 'descending' | null;

export interface IChangeSortOrderAction {
  type: typeof types.CHANGE_SORT_ORDER;
  name: SortNameType;
  column: SortColumnNameType;
}

export interface IResetSortOrderAction {
  type: typeof types.RESET_SORT;
  name: SortNameType;
}

export type SortsActionTypes = IChangeSortOrderAction & IResetSortOrderAction;

export interface IResetSort { (name: SortNameType): IResetSortOrderAction }
export interface IChangeSortOrder { (name: SortNameType, column: SortColumnNameType): IChangeSortOrderAction }

export const changeSortOrder: IChangeSortOrder = (name: SortNameType, column: SortColumnNameType) => ({
  type: types.CHANGE_SORT_ORDER,
  name,
  column,
});

export const resetSort: IResetSort = (name: SortNameType) => ({
  type: types.RESET_SORT,
  name,
});
