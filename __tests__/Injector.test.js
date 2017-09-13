import React from 'react';
import { Text, View } from 'react-native';
import Injector from '../components/Injector';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const testProps = {
	style: {
		color: 'red'
	},
	selectable: true
};

const defaultTree = renderer.create(
	<Injector
		defaultProps={testProps}
		defaultComponent={Text}>
		Hello World
	</Injector>
).toJSON();

test('Render default properly', () => {
	const defaultComponent = defaultTree;
	expect(defaultComponent.children[0]).toBe('Hello World');
	expect(defaultComponent.props.style.color).toBe('red');
});


const injectProps = {
	style: {
		color: 'black'
	},
	stubProp: true,
	selectable: false
};

const injectorTree = renderer.create(
	<Injector
		defaultProps={testProps}
		defaultComponent={Text}
		injectant={StubTextComponent}
		injectantProps={injectProps}>
		Hello World
	</Injector>
).toJSON();

test('Render default properly', () => {
	const parent = injectorTree;
	expect(parent.type).toBe('View');

	const nestedComponent = parent.children[0];
	expect(nestedComponent.type).toBe('Text');
	// Check to insure override of props
	expect(nestedComponent.props.selectable).toBeFalsy();
	expect(nestedComponent.props.style.color).toBe("black");

	const internalText = nestedComponent.children[0];
	expect(internalText).toBe('Hello World');
});

test('Render injector properly', () => {
  expect(injectorTree).toMatchSnapshot();
});

function StubTextComponent (props) {
	return (
		<View>
			<Text {...props}>
				{props.children}
			</Text>
		</View>
	)
}