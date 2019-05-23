import React from 'react';
import { map, isEmpty } from 'lodash';

import * as S from './styles';
import { InterfaceProduct } from '../../@types';
import { Caption13 } from '../../styles/primitives';

interface Props {
  products: InterfaceProduct[];
  total: number | string;
}

const Cart = ({ products, total }: Props) => {
  const nodes = !isEmpty(products) ? (
    <div>
      <S.TRow header>
        <S.TCell>Name</S.TCell>
        <S.TCell>Price</S.TCell>
        <S.TCell>Quantity</S.TCell>
      </S.TRow>
      {map(products, ({ id, title, price, quantity }: InterfaceProduct) => (
        <div key={id}>
          <S.TRow key={id}>
            <S.TCell>{title}</S.TCell>
            <S.TCell>{price}</S.TCell>
            <S.TCell>
              <S.DecrementButton>-</S.DecrementButton>
              <Caption13>{quantity}</Caption13>
              <S.IncrementButton>+</S.IncrementButton>
            </S.TCell>
          </S.TRow>
        </div>
      ))}
    </div>
  ) : (
    <div>Cart is empty</div>
  )

  return (
    <div>
      <div>{nodes}</div>
      <p>Total: {total} ₽</p>
    </div>
  )
}

export default Cart;
