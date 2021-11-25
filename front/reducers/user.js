import produce from '../utils/produce';

export const initialState = {
  loadMyInfoLoading: false, // 사용자 정보 갱신 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  me: null,
};


// 사용자 정보 갱신
export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
// 로그아웃
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOAD_MY_INFO_REQUEST: {
    draft.loadMyInfoLoading = true;
    draft.loadMyInfoError = null;
    draft.loadMyInfoDone = false;
    break;
  }
  case LOAD_MY_INFO_SUCCESS: {
    draft.loadMyInfoLoading = false;
    draft.me = action.data;
    draft.loadMyInfoDone = true;
    break;
  }
  case LOAD_MY_INFO_FAILURE: {
    draft.loadMyInfoLoading = false;
    draft.loadMyInfoError = action.error;
    break;
  }
  case LOG_OUT_REQUEST: {
    draft.logOutLoading = true;
    draft.logOutError = null;
    draft.logOutDone = false;
    break;
  }
  case LOG_OUT_SUCCESS: {
    draft.logOutLoading = false;
    draft.logOutDone = true;
    draft.me = null;
    break;
  }
  case LOG_OUT_FAILURE: {
    draft.logOutLoading = false;
    draft.logOutError = action.error;
    break;
  }
  default:
    break;
  }
});
