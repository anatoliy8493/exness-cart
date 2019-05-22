import React from 'react';
import { map } from 'lodash';

import * as S from './styles';
import Product from '../Product';

const ProductsList: any = ({ products, onAddToCart }: { products: Products.Product[], onAddToCart: () => void }) => {
  return (
    <S.ProductsList>
      {map(products, (product: Products.Product) => (
        <Product {...product} key={product.id} onAddToCart={onAddToCart} />
      ))}
    </S.ProductsList>
  );
}

export default ProductsList;
