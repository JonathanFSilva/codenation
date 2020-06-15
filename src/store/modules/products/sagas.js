import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { getProductsSuccess, getProductsFailure } from './actions';

export function* getProducts() {
  try {
    const response = yield call(api.get, 'catalog');
    return yield put(getProductsSuccess(response.data));
  } catch (_) {
    return yield put(getProductsFailure());
  }
}

export default all([takeLatest('@products/GET_PRODUCTS_REQUEST', getProducts)]);
