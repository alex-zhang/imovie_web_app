import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, Route, hashHistory} from 'react-router';
import './styles/app.styl';

import appStore from './store';
import appRoutes from './routes';

//dynamic create the dom ele.
let appDomElement = document.getElementById('react-app');

//cfg the app history.
const appHistory = syncHistoryWithStore(hashHistory, appStore);

//render the root.
ReactDOM.render((
  <Provider store={appStore}>
    <Router history={appHistory} routes={appRoutes} />
  </Provider>
), appDomElement);
