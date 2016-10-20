import React from 'react';
import {connect} from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import {push, replace} from 'react-router-redux'

import PageBox from '../components/PageBox';
import StatusMenuBar from '../components/StatusMenuBar';
import ADSwiperPlayer from '../components/ADSwiperPlayer';
import MovieCategoryContent from './MovieCategoryContent';
import TitleTabBar from '../components/TitleTabBar';

class MovieCategoryPage extends React.PureComponent {

  static defaultProps = {selectedId: 0};

  onTabChange(idx) {

    let {dispatch, movieCategories} = this.props;

    if(!movieCategories) return;

    let movieCategory = movieCategories[idx];
    if(!movieCategory) return;

    dispatch(replace({
      pathname: '/movies',
      query: {
        catgory: movieCategory.id
      }
    }));
  }

  onSlideItemClick(slide) {
    console.log('onSlideItemClick');
  }

  render() {

    let {slides, movieCategories, selectedMovieCategoryId} = this.props;
    let selectedIndex = 0;

    let tabs = movieCategories.map((movieCategory, idx)=>{

      if(movieCategory.id === selectedMovieCategoryId) {
        selectedIndex = idx;
      }

      return {
        displayName: movieCategory.title,
        id: movieCategory.id
      }
    });

    return (
      <PageBox>
        <PageBox>
          <TitleTabBar key="titleTabBar" tabs={tabs} selectedIndex={selectedIndex}
                       onTabChange={(idx)=>{this.onTabChange(idx)}}/>

          <ADSwiperPlayer key="adPlayer" slides={slides} onItemClick={(slide)=>{this.onSlideItemClick(slide)}}/>

          <div style={{height:'100%', flexGrow: 1}}>
            <SwipeableViews key="swiperViews" index={selectedIndex}
                            onChangeIndex={(idx)=>{this.onTabChange(idx)}}>
              {movieCategories.map((movieCategory)=>{
                return <MovieCategoryContent key={movieCategory.id} content={movieCategory.title} />
              })}
            </SwipeableViews>
          </div>
        </PageBox>
        <StatusMenuBar key="statusBar"/>
      </PageBox>
    );
  }
}

function mapStateToProps(state, ownProps) {

  let selectedMovieCategoryId = parseInt(ownProps.location.query.catgory);
  if(!selectedMovieCategoryId || isNaN(selectedMovieCategoryId)) {
    selectedMovieCategoryId = 0;
  }

  return {
    movieCategories: state.movieCategories,
    slides: state.slides,
    selectedMovieCategoryId: selectedMovieCategoryId
  }
}

export default connect(mapStateToProps)(MovieCategoryPage);
