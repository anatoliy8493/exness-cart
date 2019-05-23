import React from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import { InterfaceProduct, InterfaceStore } from '../@types';
import { getTotal, getCartProducts } from '../reducers';

interface Props {
  products: InterfaceProduct[];
  total: number | string;
}

const CartContainer = (props: Props) => <Cart {...props} />;

const mapStateToProps = (state: InterfaceStore) => ({
  total: getTotal(state),
  products: getCartProducts(state),
})

export default connect(mapStateToProps)(CartContainer);
