import React from 'react';
import {connect} from 'react-redux';
import SwipeViews from 'react-swipeable-views';

import PageBox from '../components/PageBox';
import StatusMenuBar from '../components/StatusMenuBar';
import ADSwiperPlayer from '../components/ADSwiperPlayer';
import SwipeableViews from 'react-swipeable-views';
import MovieCategoryContent from './MovieCategoryContent';

class MovieCategoryPage extends React.Component {

  render() {

    return (
      <PageBox>
        <PageBox>
          <ADSwiperPlayer slides={this.props.slides}/>
          <div style={{height:'100%', flexGrow: 1}}>
            <SwipeableViews>
              <MovieCategoryContent />
              <MovieCategoryContent />
              <MovieCategoryContent />
            </SwipeableViews>
          </div>
        </PageBox>

        <StatusMenuBar />
      </PageBox>
    );
  }
}

function mapStateToProps(state, dispatch) {
  return {
    movies: state.movies,
    slides: state.slides
  }
}

export default connect(mapStateToProps)(MovieCategoryPage);
