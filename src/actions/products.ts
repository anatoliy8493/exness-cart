
import * as types from '../constants';

export const asyncGetProducts = () => ({
  type: types.ASYNC_GET_TICKETS,
});

export const asyncGetProductsError = (error: any) => ({
  type: types.ASYNC_GET_TICKETS_ERROR,
  error,
});

export const asyncGetProductsSuccess = (payload: any) => ({
  type: types.ASYNC_GET_TICKETS_SUCCESS,
  payload,
});
