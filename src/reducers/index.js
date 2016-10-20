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

  slides: handleActionsReducor(arrayUtil.newArray(4, (val, idx)=>{
    return {
      id:idx + 1,
      title: `post img ${idx}`,
      url: `./assets/img_${idx+1}.jpg`
    }
  }), {
    [ActionTypes.change_slides] : actionPayloadReducer
  }),

  movieCategories: handleActionsReducor([
    {
      id: 1,
      title: '热门电影'
    },
    {
      id:2,
      title: '搞笑短片'
    },
    {
      id:3,
      title: '动漫'
    },
    {
      id:4,
      title: '鬼畜MV'
    }
  ], {
    [ActionTypes.change_movies] : actionPayloadReducer
  })
};

export default nestCombineReducers(stateTree);;
