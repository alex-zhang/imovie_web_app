import React from 'react';
import SwipeViews from 'react-swipeable-views';
import FullfillBox from '../components/FullfillBox';

class Movies extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
     </div>
    );
  }
}

export default Movies;
