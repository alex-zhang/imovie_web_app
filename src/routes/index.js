import App from "../containers/App";
import movies from "./movies";

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    movies
  ]
}

export default routes;
