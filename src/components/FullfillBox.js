import React from 'react';

class FullfillBox extends React.Component {

	static defaultProps = {width: '100%', height:'100%'}

	render() {
		const {width, height} = this.props;
		return (
			<div style={{width, height}}>
				{this.props.children}
			</div>
		)
	}
}

export default FullfillBox;
