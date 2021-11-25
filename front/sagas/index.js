import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
import stockSaga from './stock';
import portfolioSaga from './portfolio';
import newsSaga from './news';
import analystSaga from './analyst';
import creatorSaga from './creator';

import { backendURL } from '../config/config';

axios.defaults.baseURL = `${backendURL}/api`;
// 쿠키도 같이 전달하고 싶으면 true로 해야함. 쿠키 사용시 true 안하면 401에러가 뜸.
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(stockSaga),
    fork(portfolioSaga),
    fork(newsSaga),
    fork(analystSaga),
    fork(creatorSaga),
  ]);
}
