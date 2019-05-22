import { put, all, call } from 'redux-saga/effects';

import * as api from '../api';
import * as cartActions from '../actions/cart';
import * as productsActions from '../actions/products';

export function* fetchProducts() {
  try {
    const res = yield call(api.asyncGetProducts);

    if (res.ok) {
      yield put(productsActions.asyncGetProductsSuccess(res.products));
    }
  } catch (error) {
    yield put(productsActions.asyncGetProductsError(error));
  }
}

export function* fetchCartItems() {
  // try {
  //   const data = yield call(api.fetchTickets);

  //   if (data.ok) {
  //     yield put(cartActions.fetchTicketsSuccess(data));
  //   }
  // } catch (error) {
  //   yield put(cartActions.fetchTicketsError(error));
  // }
  yield 1;
}

export default function* rootSaga() {
  yield all([
    fetchProducts(),
    fetchCartItems(),
  ]);
}
