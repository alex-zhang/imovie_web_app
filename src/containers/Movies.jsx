import React from 'react';
import SwipeViews from 'react-swipeable-views';

class Movies extends React.Component {

  render() {
    return (
      <SwipeViews>
        <div title="tab1">
          Page 1
        </div>

        <div title="tab2">
          Page 2
        </div>

        <div title="tab2">
          Page 3
        </div>
      </SwipeViews>
    );
  }
}

export default Movies;
