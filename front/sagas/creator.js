import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_CREATOR_REQUEST, LOAD_CREATOR_SUCCESS, LOAD_CREATOR_FAILURE,
  LOAD_VIDEO_REQUEST, LOAD_VIDEO_SUCCESS, LOAD_VIDEO_FAILURE,
} from '../reducers/creator';

// 포스트 불러오기
function loadCreatorAPI() {
  return axios.get('/creator');
}

function* loadCreator() {
  try {
    const result = yield call(loadCreatorAPI);
    yield put({
      type: LOAD_CREATOR_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_CREATOR_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadCreator() {
  yield takeLatest(LOAD_CREATOR_REQUEST, loadCreator);
}

// 포스트 불러오기
function loadVideoAPI(data) {
  var href = `/creator/${data.id}/videos?limit=${data.limit}`
  if(data.pageToken){
    href += `&pageToken=${data.pageToken}`
  }
  return axios.get(href);
    
}

function* loadVideo(action) {
  try {
    const result = yield call(loadVideoAPI, action.data);
    yield put({
      type: LOAD_VIDEO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_VIDEO_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadVideo() {
  yield takeLatest(LOAD_VIDEO_REQUEST, loadVideo);
}

export default function* creatorSaga() {
  yield all([
    fork(watchLoadCreator),
    fork(watchLoadVideo),
  ]);
}
