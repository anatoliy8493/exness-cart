import React from 'react';
import { map, isEmpty } from 'lodash';

import * as S from './styles';
import { CartIcon } from '../icons';
import { BLACK } from '../../styles/colors';
import { InterfaceProduct } from '../../@types';
import { Caption13 } from '../../styles/primitives';

interface Props {
  total: number | string;
  products: InterfaceProduct[];
  removeFromCart: (arg: number) => void;
  incrementCartItemQuantity: (arg: number) => void;
  decrementCartItemQuantity: (arg: number) => void;
}

const Cart = ({ products, total, removeFromCart, incrementCartItemQuantity, decrementCartItemQuantity }: Props) => {
  const nodes = !isEmpty(products) ? (
    <div>
      <S.TRow header>
        <S.TCell>Name</S.TCell>
        <S.TCell>Price</S.TCell>
        <S.TCell>Quantity</S.TCell>
      </S.TRow>
      {map(products, ({ id, title, price, quantity }: InterfaceProduct) => {
        const isLastItem = quantity <= 1;
        const clickHandler = isLastItem ? removeFromCart : decrementCartItemQuantity;

        return (
          <S.TRow key={id}>
            <S.TCell>{title}</S.TCell>
            <S.TCell>{price}</S.TCell>
            <S.TCell>
              <S.DecrementButton onClick={() => clickHandler(id)}>-</S.DecrementButton>
              <Caption13>{quantity}</Caption13>
              <S.IncrementButton onClick={() => incrementCartItemQuantity(id)}>+</S.IncrementButton>
            </S.TCell>
            <S.TCell>
              <S.CartIconWrapper onClick={() => removeFromCart(id)}>
                <CartIcon style={{ width: '16px', height: '16px', color: BLACK }} />
              </S.CartIconWrapper>
            </S.TCell>
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
