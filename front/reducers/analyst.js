import produce from '../utils/produce';

export const initialState = {
  mainAnalysts: [],
  loadAnalystsLoading: false,
  loadAnalystsDone: false,
  loadAnalystsError: null,
  analystInfo: {},
  loadAnalystPortfolioLoading: false,
  loadAnalystPortfolioDone: false,
  loadAnalystPortfolioError: null,
};

export const LOAD_ANALYST_REQUEST = 'LOAD_ANALYST_REQUEST';
export const LOAD_ANALYST_SUCCESS = 'LOAD_ANALYST_SUCCESS';
export const LOAD_ANALYST_FAILURE = 'LOAD_ANALYST_FAILURE';

export const LOAD_ANALYST_PORTFOLIO_REQUEST = 'LOAD_ANALYST_PORTFOLIO_REQUEST';
export const LOAD_ANALYST_PORTFOLIO_SUCCESS = 'LOAD_ANALYST_PORTFOLIO_SUCCESS';
export const LOAD_ANALYST_PORTFOLIO_FAILURE = 'LOAD_ANALYST_PORTFOLIO_FAILURE';

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOAD_ANALYST_REQUEST: {
    draft.mainAnalysts = [];
    draft.loadAnalystsLoading = true;
    draft.loadAnalystsDone = false;
    draft.loadAnalystsError = null;
    break;
  }
  case LOAD_ANALYST_SUCCESS: {
    draft.loadAnalystsLoading = false;
    draft.loadAnalystsDone = true;
    draft.mainAnalysts = draft.mainAnalysts.concat(action.data);
    break;
  }
  case LOAD_ANALYST_FAILURE: {
    draft.loadAnalystsLoading = false;
    draft.loadAnalystsError = action.error;
    break;
  }
  case LOAD_ANALYST_PORTFOLIO_REQUEST: {
    draft.mainPortfolios = [];
    draft.loadAnalystPortfolioLoading = true;
    draft.loadAnalystPortfolioDone = false;
    draft.loadAnalystPortfolioError = null;
    break;
  }
  case LOAD_ANALYST_PORTFOLIO_SUCCESS: {
    draft.loadAnalystPortfolioLoading = false;
    draft.loadAnalystPortfolioDone = true;
    draft.analystInfo = action.data;
    break;
  }
  case LOAD_ANALYST_PORTFOLIO_FAILURE: {
    draft.loadAnalystPortfolioLoading = false;
    draft.loadAnalystPortfolioError = action.error;
    break;
  }
  default:
    break;
  }
});
