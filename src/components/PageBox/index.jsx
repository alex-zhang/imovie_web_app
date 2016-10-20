import React from 'react';
import styles from './styles.styl';

export default class extends React.PureComponent {

	static defaultProps = {width: '100%', height:'100%'}

	render() {
		const {width, height} = this.props;
		return (
			<div className={styles.self} style={{width, height}}>
				{this.props.children}
			</div>
		)
	}
}
