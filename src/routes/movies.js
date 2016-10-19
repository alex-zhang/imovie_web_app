import Movies from '../containers/Movies';
import MovieCategory from '../containers/MovieCategory';
import MovieDetail from '../containers/movieDetail/MovieDetail';


const movieCategory = {
  component: MovieCategory
}

const movieDetail = {
  path: ':id',
  component: MovieDetail
}

const movies = {
  path: 'movies',
  component: Movies,
  indexRoute: movieCategory,
  childRoutes: [
    movieCategory,
    movieDetail
  ]
}



export default movies;
