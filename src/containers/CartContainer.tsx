import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Cart } from '../components';
import { getTotal, getCartProducts } from '../reducers';
import { InterfaceProduct, InterfaceStore } from '../@types';
import { removeFromCart, incrementCartItemQuantity, decrementCartItemQuantity } from '../actions/cart';

interface Props {
  total: number | string;
  products: InterfaceProduct[];
  removeFromCart: (arg: number) => void;
  incrementCartItemQuantity: (arg: number) => void;
  decrementCartItemQuantity: (arg: number) => void;
}

const CartContainer = (props: Props) => <Cart {...props} />;

const mapStateToProps = (state: InterfaceStore) => ({
  total: getTotal(state),
  products: getCartProducts(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeFromCart: (productId: number) => dispatch(removeFromCart(productId)),
  incrementCartItemQuantity: (productId: number) => dispatch(incrementCartItemQuantity(productId)),
  decrementCartItemQuantity: (productId: number) => dispatch(decrementCartItemQuantity(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
