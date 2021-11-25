import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_INDICES_REQUEST, LOAD_INDICES_SUCCESS, LOAD_INDICES_FAILURE,
} from '../reducers/stock';

import { DUMMYINDICES } from '../reducers/mockData';

// 포스트 불러오기
function loadStockAPI() {
  // return axios.get(`/stocks?lastId=${data.lastId || 0}&limit=${data.limit}`);
  return DUMMYINDICES;
}

function* loadStock() {
  try {
    // const result = yield call(loadStockAPI);
    const result = loadStockAPI();
    yield put({
      type: LOAD_INDICES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_INDICES_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadStock() {
  yield takeLatest(LOAD_INDICES_REQUEST, loadStock);
}

export default function* stockSaga() {
  yield all([
    fork(watchLoadStock),
  ]);
}
