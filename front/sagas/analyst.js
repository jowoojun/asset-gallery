import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_ANALYST_REQUEST, LOAD_ANALYST_SUCCESS, LOAD_ANALYST_FAILURE,
  LOAD_ANALYST_PORTFOLIO_REQUEST, LOAD_ANALYST_PORTFOLIO_SUCCESS, LOAD_ANALYST_PORTFOLIO_FAILURE,
} from '../reducers/analyst';

// 포스트 불러오기
function loadAnalystAPI() {
  return axios.get('/analyst');
}

function* loadAnalyst() {
  try {
    const result = yield call(loadAnalystAPI);
    yield put({
      type: LOAD_ANALYST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ANALYST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadAnalyst() {
  yield takeLatest(LOAD_ANALYST_REQUEST, loadAnalyst);
}

// 유명 투자자의 포트폴리오 불러오기
function loadAnalystPortfolioAPI(data) {
  return axios.get(`/analyst/${data.id}/portfolio`);
}

function* loadAnalystPortfolio(action) {
  try {
    const result = yield call(loadAnalystPortfolioAPI, action.data);
    yield put({
      type: LOAD_ANALYST_PORTFOLIO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ANALYST_PORTFOLIO_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadAnalystPortfolio() {
  yield takeLatest(LOAD_ANALYST_PORTFOLIO_REQUEST, loadAnalystPortfolio);
}

export default function* analystSaga() {
  yield all([
    fork(watchLoadAnalyst),
    fork(watchLoadAnalystPortfolio),
  ]);
}
