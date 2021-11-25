import produce from '../utils/produce';
import { NEWSLIMIT } from '../config/config';

export const initialState = {
  mainNews: [],
  loadNewsLoading: false,
  loadNewsDone: false,
  loadNewsError: null,
  hasMoreNews: true,
};

export const LOAD_NEWS_REQUEST = 'LOAD_NEWS_REQUEST';
export const LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS';
export const LOAD_NEWS_FAILURE = 'LOAD_NEWS_FAILURE';

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOAD_NEWS_REQUEST: {
    draft.loadNewsLoading = true;
    draft.loadNewsDone = false;
    draft.loadNewsError = null;
    break;
  }
  case LOAD_NEWS_SUCCESS: {
    draft.loadNewsLoading = false;
    draft.loadNewsDone = true;
    draft.mainNews = draft.mainNews.concat(action.data);
    draft.hasMoreNews = action.data.length === NEWSLIMIT;
    break;
  }
  case LOAD_NEWS_FAILURE: {
    draft.loadNewsLoading = false;
    draft.loadNewsError = action.error;
    break;
  }
  default:
    break;
  }
});
