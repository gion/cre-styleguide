import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Text } from './Text'

storiesOf('Text')
	.add('with text', () => (
		<Text>Hello Text</Text>
	))
