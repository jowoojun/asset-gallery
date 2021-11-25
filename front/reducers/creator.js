import produce from '../utils/produce';
import { VIDEOSLIMIT } from '../config/config';

export const initialState = {
  mainCreators: [],
  loadCreatorsLoading: false,
  loadCreatorsDone: false,
  loadCreatorsError: null,
  mainVideos: [],
  loadVideoLoading: false,
  loadVideoDone: false,
  loadVideoError: null,
  hasMoreVideos: true,
  nextVideoListToken: null,
};

export const LOAD_CREATOR_REQUEST = 'LOAD_CREATOR_REQUEST';
export const LOAD_CREATOR_SUCCESS = 'LOAD_CREATOR_SUCCESS';
export const LOAD_CREATOR_FAILURE = 'LOAD_CREATOR_FAILURE';

export const LOAD_VIDEO_REQUEST = 'LOAD_VIDEO_REQUEST';
export const LOAD_VIDEO_SUCCESS = 'LOAD_VIDEO_SUCCESS';
export const LOAD_VIDEO_FAILURE = 'LOAD_VIDEO_FAILURE';

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOAD_CREATOR_REQUEST: {
    draft.mainCreators = [];
    draft.loadCreatorsLoading = true;
    draft.loadCreatorsDone = false;
    draft.loadCreatorsError = null;
    break;
  }
  case LOAD_CREATOR_SUCCESS: {
    draft.loadCreatorsLoading = false;
    draft.loadCreatorsDone = true;
    draft.mainCreators = draft.mainCreators.concat(action.data);
    break;
  }
  case LOAD_CREATOR_FAILURE: {
    draft.loadCreatorsLoading = false;
    draft.loadCreatorsError = action.error;
    break;
  }
  case LOAD_VIDEO_REQUEST: {
    draft.loadVideoLoading = true;
    draft.loadVideoDone = false;
    draft.loadVideoError = null;
    break;
  }
  case LOAD_VIDEO_SUCCESS: {
    draft.loadVideoLoading = false;
    draft.loadVideoDone = true;
    draft.nextVideoListToken = action.data.pageToken;
    draft.mainVideos = draft.mainVideos.concat(action.data.items);
    draft.hasMoreVideos = action.data.items.length === VIDEOSLIMIT;
    break;
  }
  case LOAD_VIDEO_FAILURE: {
    draft.loadVideoLoading = false;
    draft.loadVideoError = action.error;
    break;
  }
  default:
    break;
  }
});
