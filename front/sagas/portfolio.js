import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_PORTFOLIOS_REQUEST, LOAD_PORTFOLIOS_SUCCESS, LOAD_PORTFOLIOS_FAILURE,
} from '../reducers/portfolio';

import { DUMMYPORTFOLIOS } from '../reducers/mockData';

// 포스트 불러오기
function loadPortfoliosAPI() {
  // return axios.get(`/portfolios?lastId=${data.lastId || 0}&limit=${data.limit}`);
  return DUMMYPORTFOLIOS;
}

function* loadPortfolios() {
  try {
    // const result = yield call(loadPortfoliosAPI);
    const result = loadPortfoliosAPI();
    yield put({
      type: LOAD_PORTFOLIOS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_PORTFOLIOS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadPortfolios() {
  yield takeLatest(LOAD_PORTFOLIOS_REQUEST, loadPortfolios);
}

export default function* portfolioSaga() {
  yield all([
    fork(watchLoadPortfolios),
  ]);
}
