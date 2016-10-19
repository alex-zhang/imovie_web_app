import App from '../containers/App';

import about from './about';
import movies from './movies';

const indexRoute = {
  component: movies
};

const routes = {
  path: '/',
  component: App,
  indexRoute,
  childRoutes: [
    about,
    movies
  ]
}

export default routes;
