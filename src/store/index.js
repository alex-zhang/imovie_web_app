import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import {hashHistory} from 'react-router';
import rootReducer from '../reducers';

//cfg the middlewares
let middlewares = [
  reduxPromise,
  thunk,
  routerMiddleware(hashHistory)
];

let storeEnhancers = [
  applyMiddleware(...middlewares)
];

let composedCreateStore = compose(...storeEnhancers)(createStore);

function finalCreateStore(initialState) {
  return composedCreateStore(rootReducer, initialState);
}

const store = finalCreateStore();

export default store;



