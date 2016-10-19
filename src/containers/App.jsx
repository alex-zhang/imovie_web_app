import React from 'react';
import FullfillBox from '../components/FullfillBox';

class App extends React.Component {

  render() {
    return (
      <FullfillBox>
        {this.props.children}
      </FullfillBox>
    );
  }
}

export default App;
