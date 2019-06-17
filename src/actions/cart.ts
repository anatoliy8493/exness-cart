import * as types from '../constants';
import { ProductIdType } from './products';

type CartActionType = {
  type: string;
  productId: ProductIdType;
}

type MultipleAddToCartActionType = {
  type: string;
  productsIds: ProductIdType[];
}

export type CartActionsTypes = CartActionType & MultipleAddToCartActionType;

export interface IAddToCart { (productId: ProductIdType): CartActionType }
export interface IRemoveFromCart { (productId: ProductIdType): CartActionType }
export interface IIncrementCartItemQuantity { (productId: ProductIdType): CartActionType }
export interface IDecrementCartItemQuantity { (productId: ProductIdType): CartActionType }
export interface IMultipleAddToCart { (productsIds: ProductIdType[]): MultipleAddToCartActionType }

export const addToCart: IAddToCart = (productId: ProductIdType) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const multipleAddToCart: IMultipleAddToCart = (productsIds: ProductIdType[]) => ({
  type: types.MULTIPLE_ADD_TO_CART,
  productsIds,
});

export const removeFromCart: IRemoveFromCart = (productId: ProductIdType) => ({
  type: types.REMOVE_FROM_CART,
  productId,
});

export const incrementCartItemQuantity: IIncrementCartItemQuantity = (productId: ProductIdType) => ({
  type: types.INCREMENT_CART_ITEM_QUANTITY,
  productId,
});

export const decrementCartItemQuantity: IDecrementCartItemQuantity = (productId: ProductIdType) => ({
  type: types.DECREMENT_CART_ITEM_QUANTITY,
  productId,
});
