import React from 'react'

import styles from './styles.styl';

export default class extends React.PureComponent {

  render() {

    let {content} = this.props;
    // console.log(content);
    return <div className={styles.self}>
            <span style={{color:'red', fontSize:20}}>
              {content || ''}
            </span>
          </div>;
  }
}
