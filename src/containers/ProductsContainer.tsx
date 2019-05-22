import React from 'react';
import { connect } from 'react-redux';

import ProductsList from '../components/ProductsList';

const mapStateToProps = (store: any) => ({
  products: store.products,
})

class ProductsContainer extends React.PureComponent<{ products: any }> {
  render() {
    const { products } = this.props;

    return <ProductsList products={products} />;
  }
}

export default connect(mapStateToProps)(ProductsContainer)
