import produce from '../utils/produce';

export const initialState = {
  mainPortfolios: [],
  loadPortfoliosLoading: false,
  loadPortfoliosDone: false,
  loadPortfoliosError: null,
};

export const LOAD_PORTFOLIOS_REQUEST = 'LOAD_PORTFOLIOS_REQUEST';
export const LOAD_PORTFOLIOS_SUCCESS = 'LOAD_PORTFOLIOS_SUCCESS';
export const LOAD_PORTFOLIOS_FAILURE = 'LOAD_PORTFOLIOS_FAILURE';

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOAD_PORTFOLIOS_REQUEST: {
    draft.mainPortfolios = [];
    draft.loadPortfoliosLoading = true;
    draft.loadPortfoliosDone = false;
    draft.loadPortfoliosError = null;
    break;
  }
  case LOAD_PORTFOLIOS_SUCCESS: {
    draft.loadPortfoliosLoading = false;
    draft.loadPortfoliosDone = true;
    draft.mainPortfolios = draft.mainPortfolios.concat(action.data);
    break;
  }
  case LOAD_PORTFOLIOS_FAILURE: {
    draft.loadPortfoliosLoading = false;
    draft.loadPortfoliosError = action.error;
    break;
  }
  default:
    break;
  }
});
