import React from 'react';

import { Button } from '../';
import * as S from './styles';

import { IProduct } from '../../@types';

interface IProductItemProps extends IProduct {
  onAddToCartClick: () => void;
}

const ProductItem = ({ title, price, onAddToCartClick }: IProductItemProps) => {
  return (
    <S.Wrapper>
      <S.Header />
      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Footer>
          <S.Price>{price} ₽</S.Price>
        </S.Footer>
        <Button onClick={onAddToCartClick}>
          Add to cart
        </Button>
      </S.Body>
    </S.Wrapper>
  );
}

export default ProductItem;
