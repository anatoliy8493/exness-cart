import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import { getTotal, getCartProducts } from '../reducers';
import { InterfaceProduct, InterfaceStore } from '../@types';
import { removeFromCart, incrementCartItem, decrementCartItem } from '../actions/cart';

interface Props {
  products: InterfaceProduct[];
  total: number | string;
  removeFromCart: (arg: number) => void;
  incrementCartItem: (arg: number) => void;
  decrementCartItem: (arg: number) => void;
}

const CartContainer = (props: Props) => <Cart {...props} />;

const mapStateToProps = (state: InterfaceStore) => ({
  total: getTotal(state),
  products: getCartProducts(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeFromCart: (productId: number) => dispatch(removeFromCart(productId)),
  incrementCartItem: (productId: number) => dispatch(incrementCartItem(productId)),
  decrementCartItem: (productId: number) => dispatch(decrementCartItem(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
