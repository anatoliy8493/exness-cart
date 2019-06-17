import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Cart } from '../components';
import { ProductIdType } from '../actions/products';
import {
  resetSort,
  IResetSort,
  SortNameType,
  changeSortOrder,
  IChangeSortOrder,
  SortColumnNameType,
} from '../actions/sorts';
import { ICartProduct, IStore, ISortsStore } from '../@types';
import { getTotal, getSortedCartProducts, getCartSort } from '../reducers';
import {
  removeFromCart,
  IRemoveFromCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  IIncrementCartItemQuantity,
  IDecrementCartItemQuantity,
} from '../actions/cart';

interface IMappedFromStoreProps {
  total: number | string;
  products: ICartProduct[];
  sort: ISortsStore['cart'];
}

interface IDispatchedProps {
  resetSort: IResetSort;
  removeFromCart: IRemoveFromCart;
  changeSortOrder: IChangeSortOrder;
  incrementCartItemQuantity: IIncrementCartItemQuantity;
  decrementCartItemQuantity: IDecrementCartItemQuantity;
}

export interface ICartContainerProps extends IMappedFromStoreProps, IDispatchedProps {}

const CartContainer = (props: ICartContainerProps) => <Cart {...props} />;

const mapStateToProps = (state: IStore) => ({
  total: getTotal(state),
  sort: getCartSort(state),
  products: getSortedCartProducts(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetSort: (name: SortNameType) => dispatch(resetSort(name)),
  removeFromCart: (productId: ProductIdType) => dispatch(removeFromCart(productId)),
  incrementCartItemQuantity: (productId: ProductIdType) => dispatch(incrementCartItemQuantity(productId)),
  decrementCartItemQuantity: (productId: ProductIdType) => dispatch(decrementCartItemQuantity(productId)),
  changeSortOrder: (name: SortNameType, column: SortColumnNameType) => dispatch(changeSortOrder(name, column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
