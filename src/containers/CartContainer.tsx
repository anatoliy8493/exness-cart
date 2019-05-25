import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Cart } from '../components';
import { changeSortOrder } from '../actions/cartSorts';
import { InterfaceProduct, InterfaceStore } from '../@types';
import { getTotal, getCartProducts, getCartSorts } from '../reducers';
import {
  removeFromCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} from '../actions/cart';

interface Props {
  total: number | string;
  products: InterfaceProduct[];
  removeFromCart: (arg: number) => void;
  changeSortOrder: (name: string) => void;
  cartSorts: { name: string, sortOrder: string }
  incrementCartItemQuantity: (arg: number) => void;
  decrementCartItemQuantity: (arg: number) => void;
}

const CartContainer = (props: Props) => <Cart {...props} />;

const mapStateToProps = (state: InterfaceStore) => ({
  total: getTotal(state),
  products: getCartProducts(state),
  cartSorts: getCartSorts(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeSortOrder: (name: string) => dispatch(changeSortOrder(name)),
  removeFromCart: (productId: number) => dispatch(removeFromCart(productId)),
  incrementCartItemQuantity: (productId: number) => dispatch(incrementCartItemQuantity(productId)),
  decrementCartItemQuantity: (productId: number) => dispatch(decrementCartItemQuantity(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
