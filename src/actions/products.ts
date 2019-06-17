import { AnyAction } from 'redux';

import { IProduct } from '../@types';
import * as types from '../constants';

export type ProductIdType = number;

export interface IProductsAction {
  type: string;
  products: IProduct[];
}

export interface IAsyncGetProducts { (): AnyAction }
export interface IAsyncGetProductsError { (error: any): AnyAction }
export interface IAsyncGetProductsSuccess { (products: IProduct[]): IProductsAction }

export const asyncGetProducts: IAsyncGetProducts = () => ({
  type: types.ASYNC_GET_PRODUCTS,
});

export const asyncGetProductsError: IAsyncGetProductsError = (error: any) => ({
  type: types.ASYNC_GET_PRODUCTS_ERROR,
  error,
});

export const asyncGetProductsSuccess: IAsyncGetProductsSuccess = (products: IProduct[]) => ({
  type: types.ASYNC_GET_PRODUCTS_SUCCESS,
  products,
});
