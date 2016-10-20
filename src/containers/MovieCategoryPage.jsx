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

  onSlideItemClick() {
    console.log('onSlideItemClick');

    let {dispatch} = this.props;

    dispatch(replace({
      pathname: '/movie',
    }));
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

    let mockClickStyle = {
      backgroundColor: 'blue',
      position:'absolute',
      left: "50%",
      top: 80,
      color:"white",
      fontSize: 20,
      opacity: 0.4,
      marginLeft:-170,
      width: 340,
      height: 150,
      zIndex:9999
    }

    return (
      <PageBox>
        <PageBox>
          <TitleTabBar key="titleTabBar" tabs={tabs} selectedIndex={selectedIndex}
                       onTabChange={(idx)=>{this.onTabChange(idx)}}/>

          <ADSwiperPlayer key="adPlayer" slides={slides} />

          <div style={mockClickStyle} onClick={()=>{this.onSlideItemClick()}}>Click Me!</div>

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
