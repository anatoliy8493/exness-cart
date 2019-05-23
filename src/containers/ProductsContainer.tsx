import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cart';
import { InterfaceProduct, InterfaceStore } from '../@types';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';
import { asyncGetProducts } from '../actions/products';
import { getVisibleProducts } from '../reducers/products';

interface OwnProps {
  products: InterfaceProduct[];
  addToCart: (arg: number) => void;
}

interface DispatchedProps {
  asyncGetProducts: () => void;
}

class ProductsContainer extends React.PureComponent<OwnProps & DispatchedProps> {
  componentDidMount() {
    this.props.asyncGetProducts();
  }

  render() {
    const { products, addToCart } = this.props;

    return (
      <ProductsList>
        {products.map((product: InterfaceProduct) =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClick={() => addToCart(product.id)}
          />
        )}
      </ProductsList>
    );
  }
}

const mapStateToProps = (state: InterfaceStore) => ({
  products: getVisibleProducts(state.products),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToCart: (productId: number) => dispatch(addToCart(productId)),
  asyncGetProducts: () => dispatch(asyncGetProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
