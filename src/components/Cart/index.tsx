import React from 'react';
import { map, isEmpty } from 'lodash';

import * as S from './styles';
import { InterfaceProduct } from '../../@types';
import { Caption13 } from '../../styles/primitives';

interface Props {
  total: number | string;
  products: InterfaceProduct[];
  removeFromCart: (arg: number) => void;
  incrementCartItem: (arg: number) => void;
  decrementCartItem: (arg: number) => void;
}

const Cart = ({ products, total, removeFromCart, incrementCartItem, decrementCartItem }: Props) => {
  const nodes = !isEmpty(products) ? (
    <div>
      <S.TRow header>
        <S.TCell>Name</S.TCell>
        <S.TCell>Price</S.TCell>
        <S.TCell>Quantity</S.TCell>
      </S.TRow>
      {map(products, ({ id, title, price, quantity }: InterfaceProduct) => {
        const isLastItem = quantity === 1;
        const clickHandler = isLastItem ? removeFromCart : decrementCartItem;

        return (
          <S.TRow key={id}>
            <S.TCell>{title}</S.TCell>
            <S.TCell>{price}</S.TCell>
            <S.TCell>
              <S.DecrementButton onClick={() => clickHandler(id)}>-</S.DecrementButton>
              <Caption13>{quantity}</Caption13>
              <S.IncrementButton onClick={() => incrementCartItem(id)}>+</S.IncrementButton>
            </S.TCell>
            <S.TCell onClick={() => removeFromCart(id)}>Удалить</S.TCell>
          </S.TRow>
        );
      })}
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
