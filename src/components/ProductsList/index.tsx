import React from 'react';
import { map } from 'lodash';

import * as S from './styles';
import Product from '../Product';

const ProductsList: any = ({ products }: { products: Products.Product[] }) => {
  return (
    <S.ProductsList>
      {map(products, (product: Products.Product) => (
        <Product {...product} key={product.id} />
      ))}
    </S.ProductsList>
  );
}

export default ProductsList;
