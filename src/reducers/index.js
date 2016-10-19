import {
  nestCombineReducers,
  handleActionsReducor,
  defaultStateReducor,
  actionPayloadReducer
} from 'nesting-reducer';

import {routerReducer} from 'react-router-redux';

let stateTree = {
  //config of react router
  routing: routerReducer,

  config: {
    lang: "zh-CN"
  }
};

export default nestCombineReducers(stateTree);;
