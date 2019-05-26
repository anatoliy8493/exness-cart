import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Cart } from '../components';
import { resetSort, changeSortOrder } from '../actions/sorts';
import { InterfaceCartProduct, InterfaceStore } from '../@types';
import { getTotal, getSortedCartProducts, getCartSort } from '../reducers';
import {
  removeFromCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} from '../actions/cart';

interface Props {
  total: number | string;
  products: InterfaceCartProduct[];
  resetSort: (name: string) => void;
  removeFromCart: (arg: number) => void;
  changeSortOrder: (column: string) => void;
  incrementCartItemQuantity: (arg: number) => void;
  decrementCartItemQuantity: (arg: number) => void;
  sort: { name: string, sortOrder: string, column: string };
}

const CartContainer = (props: Props) => <Cart {...props} />;

const mapStateToProps = (state: InterfaceStore) => ({
  total: getTotal(state),
  sort: getCartSort(state),
  products: getSortedCartProducts(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetSort: (name: string) => dispatch(resetSort(name)),
  removeFromCart: (productId: number) => dispatch(removeFromCart(productId)),
  changeSortOrder: (column: string) => dispatch(changeSortOrder('cart', column)),
  incrementCartItemQuantity: (productId: number) => dispatch(incrementCartItemQuantity(productId)),
  decrementCartItemQuantity: (productId: number) => dispatch(decrementCartItemQuantity(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
