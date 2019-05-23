import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import { removeFromCart } from '../actions/cart';
import { InterfaceProduct, InterfaceStore } from '../@types';
import { getTotal, getCartProducts } from '../reducers';

interface Props {
  products: InterfaceProduct[];
  total: number | string;
  removeFromCart: (arg: number) => void;
}

const CartContainer = (props: Props) => <Cart {...props} />;

const mapStateToProps = (state: InterfaceStore) => ({
  total: getTotal(state),
  products: getCartProducts(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeFromCart: (productId: number) => dispatch(removeFromCart(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
