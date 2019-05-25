import { put, all, call } from 'redux-saga/effects';

import * as api from '../api';
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

export default function* rootSaga() {
  yield all([
    fetchProducts(),
  ]);
}
