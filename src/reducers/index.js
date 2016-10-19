import {
  nestCombineReducers,
  handleActionsReducor,
  defaultStateReducor,
  actionPayloadReducer
} from 'nesting-reducer';


let stateTree = {
  config: {
    lang: "zh-CN"
  }
};

export default nestCombineReducers(stateTree);;
