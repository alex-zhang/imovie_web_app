import React from 'react';
import PageBox from '../components/PageBox';
import StatusMenuBar from '../components/StatusMenuBar';

class App extends React.Component {

  render() {
    return (
      <PageBox>
        {this.props.children}
      </PageBox>
    );
  }
}

export default App;
