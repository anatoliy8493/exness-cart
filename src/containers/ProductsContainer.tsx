import React from 'react';
import { Dispatch } from 'redux';
import { get, map } from 'lodash';
import { connect } from 'react-redux';

import { randomIntFromInterval } from '../utils';
import { asyncGetProducts } from '../actions/products';
import { getVisibleProducts } from '../reducers/products';
import { ProductInterface, InterfaceStore } from '../@types';
import { addToCart, multipleAddToCart } from '../actions/cart';
import { Button, ProductItem, ProductsList } from '../components';

interface OwnProps {
  products: ProductInterface[];
  addToCart: (arg: number) => void;
  multipleAddToCart: (arg: number[]) => void;
}

interface DispatchedProps {
  asyncGetProducts: () => void;
}

class ProductsContainer extends React.PureComponent<OwnProps & DispatchedProps> {
  public componentDidMount() {
    this.props.asyncGetProducts();
  }

  public render() {
    const { products, addToCart, multipleAddToCart } = this.props;
    const productsIdsList: number[] = map(products, (product: ProductInterface) => product.id);
    const randomProductId = get(products[randomIntFromInterval(0, products.length - 1)], 'id');

    return (
      <React.Fragment>
        <ProductsList>
          {map(products, (product: ProductInterface) =>
            <ProductItem
              {...product}
              key={product.id}
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
  asyncGetProducts: () => dispatch(asyncGetProducts()),
  addToCart: (productId: number) => dispatch(addToCart(productId)),
  multipleAddToCart: (productsIds: number[]) => dispatch(multipleAddToCart(productsIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
