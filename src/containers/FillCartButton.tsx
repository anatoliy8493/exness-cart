import React from 'react';
import { map } from 'lodash';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Button } from '../components';
import { multipleAddToCart } from '../actions/cart';
import { getVisibleProducts } from '../reducers/products';
import { InterfaceProduct, InterfaceStore } from '../@types';

interface Props {
  products: InterfaceProduct[];
  multipleAddToCart: (arg: number[]) => void;
}

const FillCartButton = ({ multipleAddToCart, products }: Props) => (
  <Button
    onClick={() => multipleAddToCart(map(products, (product: InterfaceProduct) => product.id))}
  >
    add each one
  </Button>
);

const mapStateToProps = (state: InterfaceStore) => ({
  products: getVisibleProducts(state.products),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  multipleAddToCart: (productsIds: number[]) => dispatch(multipleAddToCart(productsIds)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FillCartButton);
