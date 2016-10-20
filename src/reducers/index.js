import {
  nestCombineReducers,
  handleActionsReducor,
  defaultStateReducor,
  actionPayloadReducer
} from 'nesting-reducer';

import {routerReducer} from 'react-router-redux';

import * as arrayUtil from '../utils/arrayUtil'
import * as ActionTypes from './ActionTypes';

let stateTree = {
  //config of react router
  routing: routerReducer,

  config: {
    lang: "zh-CN"
  },

  slides: handleActionsReducor(arrayUtil.newArray(4).map((val, idx)=>{
    return {
      id:idx + 1,
      title: `img ${idx}`,
      url: `./assets/img_${idx+1}.jpg`
    }
  }), {
    [ActionTypes.change_slides] : actionPayloadReducer
  }),

  movies: handleActionsReducor(arrayUtil.newArray(4).map((val, idx)=>{
    return {
      id:idx + 1,
      title: `电影 ${idx + 1}`
    }
  }), {
    [ActionTypes.change_movies] : actionPayloadReducer
  })
};

export default nestCombineReducers(stateTree);;
