import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_NEWS_REQUEST, LOAD_NEWS_SUCCESS, LOAD_NEWS_FAILURE,
} from '../reducers/news';

// 포스트 불러오기
function loadNewsAPI(data) {
  return axios.get(`/news?pageSize=${data.pageSize}&page=${data.page}`);
}

function* loadNews(action) {
  try {
    const result = yield call(loadNewsAPI, action.data);
    yield put({
      type: LOAD_NEWS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_NEWS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadNews() {
  yield takeLatest(LOAD_NEWS_REQUEST, loadNews);
}

export default function* newsSaga() {
  yield all([
    fork(watchLoadNews),
  ]);
}
