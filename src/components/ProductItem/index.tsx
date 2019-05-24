import React from 'react';

import { Button } from '../';
import * as S from './styles';
import { Caption13 } from '../../styles/primitives';

import { InterfaceProduct } from '../../@types';

interface Props {
  product: InterfaceProduct;
  onAddToCartClick: () => void;
}

const ProductItem = ({ product, onAddToCartClick }: Props) => {
  return (
    <S.Wrapper>
      <S.Header />
      <S.Body>
        <S.Title>{product.title}</S.Title>
        <S.Footer>
          <S.Price>{product.price} ₽</S.Price>
          <Caption13>{product.quantity}</Caption13>
        </S.Footer>
        <Button
          onClick={onAddToCartClick}
          disabled={product.quantity <= 0}
        >
          {product.quantity > 0 ? 'Add to cart' : 'Sold out'}
        </Button>
      </S.Body>
    </S.Wrapper>
  );
}

export default ProductItem;
