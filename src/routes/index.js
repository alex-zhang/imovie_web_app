import App from "../containers/App";

import about from './about';
import movieCategory from './movieCategory';
import movieInfo from './movieInfo';

export default {
  path: '/',
  component: App,
  childRoutes: [
    about,
    movieCategory,
    movieInfo
  ]
}
