import React from 'react';
import PageBox from '../components/PageBox';

import MovieInfoPageContent from './MovieInfoPageContent';

class MovieInfoPage extends React.Component {

  render() {
    return (
      <PageBox>
        <MovieInfoPageContent />
      </PageBox>
    );
  }
}

export default MovieInfoPage;
