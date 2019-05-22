import React from 'react';

import * as S from './styles';
import Button from '../Button';
import { Caption13 } from '../../styles/primitives';

const Product: any = ({ id, title, price, quantity, onAddToCart }: any) => (
  <S.Wrapper>
    <S.Header />
    <S.Body>
      <S.Title>{title}</S.Title>
      <S.Footer>
        <S.Price>{price} ₽</S.Price>
        <Caption13>{quantity}</Caption13>
      </S.Footer>
      <Button onClick={() => onAddToCart(id)}>Add to cart</Button>
    </S.Body>
  </S.Wrapper>
)

export default Product;
