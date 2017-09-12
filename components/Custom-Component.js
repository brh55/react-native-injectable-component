import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class CustomComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>{this.props.hello}</Text>
			</View>
		)
	}
}

 CustomComponent.propTypes = {
  hello: PropTypes.string
}
