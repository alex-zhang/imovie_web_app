import React from 'react'
import ReactGesture from 'react-gesture';
import {getDirection} from 'react-gesture/lib/utils/geture-calculations';

import styles from './styles.styl';

export default class extends React.Component {

  goback() {
  }

  //events
  onBackBtnClick() {
    console.log('onBackBtnClick');
    this.goback();
  }

  onSwipComplete(evt) {
    console.log('onSwipComplete');

    let {gesture} = evt;
    if(!gesture) return;

    let isLeftSwipe = getDirection(gesture.deltaX, gesture.absX, gesture.deltaY, gesture.absY) === 'Left';
    if(!isLeftSwipe) return;

    this.goback();
  }

  render() {
    return <ReactGesture swipeThreshold={50}
                         onMouseUp={(evt)=>{this.onSwipComplete(evt)}}
                         onTouchEnd={(evt)=>{this.onSwipComplete(evt)}}>
        <div className={styles.self}>
          <div className={styles.backBtn} onClick={()=>{this.onBackBtnClick()}}/>
        </div>
      </ReactGesture>
  }
}
