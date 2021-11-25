import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import stock from './stock';
import portfolio from './portfolio';
import news from './news';
import analyst from './analyst';
import creator from './creator';

const rootReducer = (state, action) => {
  switch (action.type) {
  case HYDRATE:
    // console.log('HYDRATE', action);
    return action.payload;
  default: {
    const combineReducer = combineReducers({
      user,
      stock,
      portfolio,
      news,
      analyst,
      creator,
    });
    return combineReducer(state, action);
  }
  }
};

export default rootReducer;
