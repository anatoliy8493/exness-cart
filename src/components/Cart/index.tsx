import React from 'react';
import { map, isEmpty } from 'lodash';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import * as S from './styles';
import { BLACK } from '../../styles/colors';
import { InterfaceProduct } from '../../@types';
import { Caption13 } from '../../styles/primitives';
import { CartIcon, SortIcon, ArrowDownwardIcon, ArrowUpwardIcon } from '../icons';

interface Props {
  total: number | string;
  products: InterfaceProduct[];
  removeFromCart: (arg: number) => void;
  changeSortOrder: (name: string) => void;
  cartSorts: { name: string, sortOrder: string }
  incrementCartItemQuantity: (arg: number) => void;
  decrementCartItemQuantity: (arg: number) => void;
}

interface TableHeaderItem {
  id: number;
  name: string;
  innerText: string;
  sortOrder?: string | null | undefined;
}

const TABLE_HEADER_LIST: TableHeaderItem[] = [
  { id: 1, name: 'title', innerText: 'Name' },
  { id: 2, name: 'price', innerText: 'Price' },
  { id: 3, name: 'quantity', innerText: 'Quantity' },
];

export default class Cart extends React.PureComponent<Props> {
  private static getSortIcon(sortOrder: string | null | undefined) {
    switch(sortOrder) {
      case 'ascending': return <ArrowUpwardIcon style={{ width: 10, height: 12, color: BLACK }} />;
      case 'descending': return <ArrowDownwardIcon style={{ width: 10, height: 12, color: BLACK }} />;

      default: return <SortIcon style={{ width: 10, height: 12, color: BLACK }} />;
    }
  }

  render() {
    const {
      total,
      products,
      cartSorts,
      removeFromCart,
      changeSortOrder,
      incrementCartItemQuantity,
      decrementCartItemQuantity,
    } = this.props;

    const mappedTableHeaderList = map(TABLE_HEADER_LIST, item => {
      if (item.name === cartSorts.name) {
        return { ...item, ...cartSorts };
      }

      return item;
    })

    const nodes = !isEmpty(products) ? (
      <div>
        <S.TRow header>
          {map(mappedTableHeaderList, ({ id, name, innerText, sortOrder }) => (
            <S.TCell onClick={() => changeSortOrder(name)} key={id} header>
              <S.TCellInner>
                {innerText}
                {Cart.getSortIcon(sortOrder)}
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
}
