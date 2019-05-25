import React from 'react';
import { map, isEmpty } from 'lodash';

import * as S from './styles';
import { BLACK } from '../../styles/colors';
import { InterfaceProduct } from '../../@types';
import { Caption13 } from '../../styles/primitives';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { CartIcon, SortIcon, ArrowDownwardIcon, ArrowUpwardIcon } from '../icons';

interface Props {
  total: number | string;
  products: InterfaceProduct[];
  removeFromCart: (arg: number) => void;
  changeSortOrder: (name: string) => void;
  incrementCartItemQuantity: (arg: number) => void;
  decrementCartItemQuantity: (arg: number) => void;
}

const TABLE_HEADER_LIST = [
  { id: 1, name: 'title', innerText: 'Name' },
  { id: 2, name: 'price', innerText: 'Price' },
  { id: 3, name: 'quantity', innerText: 'Quantity' },
];

const Cart = ({
  total,
  products,
  removeFromCart,
  changeSortOrder,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
}: Props) => {
  const nodes = !isEmpty(products) ? (
    <div>
      <S.TRow header>
        {map(TABLE_HEADER_LIST, ({ id, name, innerText }) => (
          <S.TCell onClick={() => changeSortOrder(name)} key={id} header>
            <S.TCellInner>
              {innerText}
              <SortIcon style={{ width: 10, height: 12, color: BLACK }} />
            </S.TCellInner>
          </S.TCell>
        ))}
      </S.TRow>
      <TransitionGroup className="table">
        {map(products, ({ id, title, price, quantity }: InterfaceProduct) => {
          const isLastItem = quantity <= 1;
          const clickHandler = isLastItem ? removeFromCart : decrementCartItemQuantity;

          return (
            <CSSTransition
              key={id}
              timeout={500}
              classNames="table-item"
            >
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
            </CSSTransition>
          );
        })}
      </TransitionGroup>
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
