import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cart';

import ProductsList from '../components/ProductsList';

class ProductsContainer extends React.PureComponent<{ products: any, addToCart: any }> {
  render() {
    const { products, addToCart } = this.props;

    return <ProductsList products={products} onAddToCart={addToCart} />;
  }
}

const mapStateToProps = (store: any) => ({
  products: store.products,
})

const mapDispatchToProps = (dispatch: any) => ({
  addToCart: (productId: number) => dispatch(addToCart(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
