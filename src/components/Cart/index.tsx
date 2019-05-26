import React from 'react';
import { size, map, isEmpty } from 'lodash';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import * as S from './styles';
import { BLACK } from '../../styles/colors';
import { InterfaceCartProduct } from '../../@types';
import { Caption13 } from '../../styles/primitives';
import { CartIcon, SortIcon, ArrowDownwardIcon, ArrowUpwardIcon } from '../icons';

interface Props {
  total: number | string;
  products: InterfaceCartProduct[];
  resetSort: (name: string) => void;
  removeFromCart: (arg: number) => void;
  changeSortOrder: (column: string) => void;
  incrementCartItemQuantity: (arg: number) => void;
  decrementCartItemQuantity: (arg: number) => void;
  sort: { name: string, sortOrder: string, column: string };
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
      case 'descending': return <ArrowUpwardIcon style={{ width: 10, height: 12, color: BLACK }} />;
      case 'ascending': return <ArrowDownwardIcon style={{ width: 10, height: 12, color: BLACK }} />;

      default: return <SortIcon style={{ width: 10, height: 12, color: BLACK }} />;
    }
  }

  private onDecrementButtonClick = (id: number, isLastItem: boolean, isLastProduct: boolean) => {
    const { resetSort, removeFromCart, decrementCartItemQuantity } = this.props;

    if (isLastItem) {
      removeFromCart(id);

      if (isLastProduct) {
        resetSort('cart');
      }
    } else {
      decrementCartItemQuantity(id);
    }
  }

  private onRemoveButtonClick = (id: number, isLastProduct: boolean) => {
    const { resetSort, removeFromCart } = this.props;

    if (isLastProduct) {
      removeFromCart(id);
      resetSort('cart');
    } else {
      removeFromCart(id);
    }
  }

  public render() {
    const { onRemoveButtonClick, onDecrementButtonClick } = this;
    const {
      sort,
      total,
      products,
      changeSortOrder,
      incrementCartItemQuantity,
    } = this.props;

    const isLastProduct: boolean = size(products) === 1;
    const mappedTableHeaderList = map(TABLE_HEADER_LIST, item => {
      if (item.name === sort.column) return { ...item, ...sort };

      return item;
    });

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
          {map(products, ({ id, title, price, quantity }) => {
            const isLastItem: boolean = quantity <= 1;

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
                    <S.DecrementButton onClick={() => onDecrementButtonClick(id, isLastItem, isLastProduct)}>-</S.DecrementButton>
                    <Caption13>{quantity}</Caption13>
                    <S.IncrementButton onClick={() => incrementCartItemQuantity(id)}>+</S.IncrementButton>
                  </S.TCell>
                  <S.TCell>
                    <S.CartIconWrapper onClick={() => onRemoveButtonClick(id, isLastProduct)}>
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
        <S.Total>Total: {total} ₽</S.Total>
      </div>
    )
  }
}
