import React from 'react';
import { get, map } from 'lodash';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { randomIntFromInterval } from '../utils';
import { asyncGetProducts } from '../actions/products';
import { getVisibleProducts } from '../reducers/products';
import { InterfaceProduct, InterfaceStore } from '../@types';
import { addToCart, multipleAddToCart } from '../actions/cart';
import { Button, ProductItem, ProductsList } from '../components';

interface OwnProps {
  products: InterfaceProduct[];
  addToCart: (arg: number) => void;
  multipleAddToCart: (arg: number[]) => void;
}

interface DispatchedProps {
  asyncGetProducts: () => void;
}

class ProductsContainer extends React.PureComponent<OwnProps & DispatchedProps> {
  componentDidMount() {
    this.props.asyncGetProducts();
  }

  render() {
    const { products, addToCart, multipleAddToCart } = this.props;

    const productsIdsList: number[] = map(products, (product: InterfaceProduct) => product.id);
    const randomProductId: number = get(products[randomIntFromInterval(0, products.length - 1)], 'id');

    return (
      <React.Fragment>
        <ProductsList>
          {products.map((product: InterfaceProduct) =>
            <ProductItem
              key={product.id}
              product={product}
              onAddToCartClick={() => addToCart(product.id)}
            />
          )}
        </ProductsList>
        <br/>
        <Button onClick={() => multipleAddToCart(productsIdsList)}>add each one</Button>
        &nbsp;
        <Button onClick={() => addToCart(randomProductId)}>add random one</Button>
        <br/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: InterfaceStore) => ({
  products: getVisibleProducts(state.products),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToCart: (productId: number) => dispatch(addToCart(productId)),
  asyncGetProducts: () => dispatch(asyncGetProducts()),
  multipleAddToCart: (productsIds: number[]) => dispatch(multipleAddToCart(productsIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
