import produce from '../utils/produce';

export const initialState = {
  mainIndices: [],
  loadIndicesLoading: false,
  loadIndicesDone: false,
  loadIndicesError: null,
};

export const LOAD_INDICES_REQUEST = 'LOAD_INDICES_REQUEST';
export const LOAD_INDICES_SUCCESS = 'LOAD_INDICES_SUCCESS';
export const LOAD_INDICES_FAILURE = 'LOAD_INDICES_FAILURE';

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOAD_INDICES_REQUEST: {
    draft.mainIndices = [];
    draft.loadIndicesLoading = true;
    draft.loadIndicesDone = false;
    draft.loadIndicesError = null;
    break;
  }
  case LOAD_INDICES_SUCCESS: {
    draft.loadIndicesLoading = false;
    draft.loadIndicesDone = true;
    draft.mainIndices = draft.mainIndices.concat(action.data);
    break;
  }
  case LOAD_INDICES_FAILURE: {
    draft.loadIndicesLoading = false;
    draft.loadIndicesError = action.error;
    break;
  }
  default:
    break;
  }
});
