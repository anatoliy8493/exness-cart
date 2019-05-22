import React from 'react';

import * as S from './styles';
import Button from '../Button';
import { Caption13 } from '../../styles/primitives';

const Product: React.FC = ({ title, price, quantity }: any) => (
  <S.Wrapper>
    <S.Header />
    <S.Body>
      <S.Title>{title}</S.Title>
      <S.Footer>
        <S.Price>{price} ₽</S.Price>
        <Caption13>{quantity}</Caption13>
      </S.Footer>
      <Button>Добавить в корзину</Button>
    </S.Body>
  </S.Wrapper>
)

export default Product;
