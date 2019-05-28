import { ProductInterface } from '../@types';
import * as types from '../constants';

export const asyncGetProducts = () => ({
  type: types.ASYNC_GET_PRODUCTS,
});

export const asyncGetProductsError = (error: any) => ({
  type: types.ASYNC_GET_PRODUCTS_ERROR,
  error,
});

export const asyncGetProductsSuccess = (products: ProductInterface[]) => ({
  type: types.ASYNC_GET_PRODUCTS_SUCCESS,
  products,
});
