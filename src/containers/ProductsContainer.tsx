import React from 'react';
import { Dispatch } from 'redux';
import { get, map } from 'lodash';
import { connect } from 'react-redux';

import { IProduct, IStore } from '../@types';
import { randomIntFromInterval } from '../utils';
import { getVisibleProducts } from '../reducers/products';
import { Button, ProductItem, ProductsList } from '../components';
import { asyncGetProducts, IAsyncGetProducts, ProductIdType } from '../actions/products';
import { addToCart, IAddToCart, multipleAddToCart, IMultipleAddToCart } from '../actions/cart';

interface IMappedFromStoreProps {
  products: IProduct[];
}

interface IDispatchedProps {
  addToCart: IAddToCart;
  asyncGetProducts: IAsyncGetProducts;
  multipleAddToCart: IMultipleAddToCart;
}

interface IProductsContainerProps extends IMappedFromStoreProps, IDispatchedProps {}

class ProductsContainer extends React.PureComponent<IProductsContainerProps> {
  public componentDidMount() {
    this.props.asyncGetProducts();
  }

  public render() {
    const { products, addToCart, multipleAddToCart } = this.props;
    const productsIdsList: ProductIdType[] = map(products, (product: IProduct) => product.id);
    const randomProductId = get(products[randomIntFromInterval(0, products.length - 1)], 'id');

    return (
      <React.Fragment>
        <ProductsList>
          {map(products, (product: IProduct) =>
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

const mapStateToProps = (state: IStore) => ({
  products: getVisibleProducts(state.products),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  asyncGetProducts: () => dispatch(asyncGetProducts()),
  addToCart: (productId: ProductIdType) => dispatch(addToCart(productId)),
  multipleAddToCart: (productsIds: ProductIdType[]) => dispatch(multipleAddToCart(productsIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
