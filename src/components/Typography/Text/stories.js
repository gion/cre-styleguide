import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import { Text } from './Text'

storiesOf('Text')
	.addDecorator(withInfo)
	.addDecorator(withSmartKnobs)
	.addDecorator(withKnobs)
	.add('basic usage', () => <Text>Lorem Ipsum</Text>)
	.add('bold', () => <Text bold>I'm a bold text</Text>)

	.add('primary type', () => <Text type="primary">This is a primary text</Text>)
	.add('primary bold', () => (
		<Text type="primary" bold>
			I'm a primary bold text
		</Text>
	))
	.add('secondary type', () => (
		<Text type="secondary">
			This is a secondary text (HINT: `secondary` type is the default type
			value, so you can omit the `type` prop if you want to make the text
			secondary)
		</Text>
	))
	.add('secondary bold type', () => (
		<Text type="secondary" bold>
			This is a secondary bold text
		</Text>
	))
	.add('with custom className', () => (
		<Text className="custom-class-name">Custom class name (check source)</Text>
	))
	.add('all', () => (
		<ul>
			<li>
				<Text>basic usage</Text>
			</li>
			<li>
				<Text bold>basic usage (bold)</Text>
			</li>
			<li>
				<Text type="primary">primary text</Text>
			</li>
			<li>
				<Text type="primary" bold>
					primary bold text
				</Text>
			</li>
			<li>
				<Text type="secondary">secondary text</Text>
			</li>
			<li>
				<Text type="secondary" bold>
					secondary bold text
				</Text>
			</li>
		</ul>
	))
