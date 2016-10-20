import React from 'react'
import ReactGesture from 'react-gesture';
import {getDirection} from 'react-gesture/lib/utils/geture-calculations';
import {push, replace} from 'react-router-redux'
import {connect} from 'react-redux';
import styles from './styles.styl';

class MovieInfoPageContent extends React.PureComponent {

  goback() {
    let {dispatch} = this.props;

    dispatch(replace({
      pathname: '/movies',
      query: {
        catgory: 1
      }
    }));
  }

  //events
  onBackBtnClick() {
    console.log('onBackBtnClick');
    this.goback();
  }

  onSwipComplete(evt) {
    let {gesture} = evt;
    if(!gesture) return;

    let isLeftSwipe = getDirection(gesture.deltaX, gesture.absX, gesture.deltaY, gesture.absY) === 'Left';
    if(!isLeftSwipe) return;

    console.log('onSwipComplete');

    this.goback();
  }

  render() {
    return <ReactGesture swipeThreshold={50}
                         onMouseUp={(evt)=>{this.onSwipComplete(evt)}}
                         onTouchEnd={(evt)=>{this.onSwipComplete(evt)}}>
        <div className={styles.self}>
          <div className={styles.backBtn} onClick={()=>{this.onBackBtnClick()}}>Click Me!</div>
        </div>
      </ReactGesture>
  }
}

export default connect()(MovieInfoPageContent);
