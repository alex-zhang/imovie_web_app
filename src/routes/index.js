import App from '../containers/App';

import about from './about';
import movies from './movies';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: movies
  },

  childRoutes: [
    movies
  ]
}

export default routes;
