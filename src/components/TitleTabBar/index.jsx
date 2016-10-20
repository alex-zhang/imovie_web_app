import React from 'react'
import Tabs from 'react-tabs-navigation'

import styles from './styles.styl';

export default class extends React.PureComponent {

	static defaultProps = {tabs:[], selectedIndex: 0};

	//evt handles
	onTabChange(idx) {
		let {onTabChange} = this.props;

		if(!onTabChange) return;
		onTabChange(idx);
	}

	render() {
		let {tabs = [], selectedIndex} = this.props;

		return (
			<Tabs tabs={tabs} selected={selectedIndex} onTabChange={(evt)=>{this.onTabChange(evt)}}>
			</Tabs>
		);
	}
}
