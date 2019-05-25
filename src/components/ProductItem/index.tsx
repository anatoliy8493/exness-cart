import React from 'react';

import { Button } from '../';
import * as S from './styles';
import { Caption13 } from '../../styles/primitives';

import { InterfaceProduct } from '../../@types';

interface Props extends InterfaceProduct {
  onAddToCartClick: () => void;
}

const ProductItem = ({ title, price, quantity, onAddToCartClick }: Props) => {
  return (
    <S.Wrapper>
      <S.Header />
      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Footer>
          <S.Price>{price} ₽</S.Price>
          <Caption13>{quantity}</Caption13>
        </S.Footer>
        <Button
          onClick={onAddToCartClick}
          disabled={quantity <= 0}
        >
          {quantity > 0 ? 'Add to cart' : 'Sold out'}
        </Button>
      </S.Body>
    </S.Wrapper>
  );
}

export default ProductItem;
