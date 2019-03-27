import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Injector = (props) => {
	const _renderDefault = (props) => {
		const DefaultComponent = props.defaultComponent;
		const { defaultProps } = props;

		return (
			<DefaultComponent
				{...defaultProps}
			>
				{props.children}
			</DefaultComponent>
		)
	}

	const _renderInjectant = (props) => {
		const Injectant = props.injectant;
		const { defaultProps, injectantProps } = props;

		return (
			<Injectant
				{...defaultProps}
				{...injectantProps}>
					{props.children}
			</Injectant>
		)
	}

	return (props.injectant) ? _renderInjectant(props) : _renderDefault(props);
}

Injector.propTypes = {
	defaultComponent: PropTypes.elementType,
	defaultProps: PropTypes.object,
	injectant: PropTypes.func,
	injectantProps: PropTypes.object
};

export default Injector;
