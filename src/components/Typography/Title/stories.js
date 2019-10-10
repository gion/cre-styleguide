import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import { Title } from './Title'

storiesOf('Title')
	.addDecorator(withInfo)
	.addDecorator(withSmartKnobs)
	.addDecorator(withKnobs)
	.add('basic usage', () => <Title>I'm a title (h1)</Title>)
	.add('main title', () => <Title type="main">This is a main title (h1)</Title>)
	.add('subtitle', () => <Title type="subtitle">This is a subtitle (h2)</Title>)
	.add('section title', () => (
		<Title type="section-title">This is a section title (h3)</Title>
	))
	.add('section subtitle', () => (
		<Title type="section-subtitle">This is a section subtitle (h4)</Title>
	))
	.add('all', () => (
		<ul>
			<li>
				<Title>basic usage (no props, type defaults to `main`)</Title>
			</li>
			<li>
				<Title bold>basic usage (bold)</Title>
			</li>
			<li>
				<Title type="subtitle">subtitle</Title>
			</li>
			<li>
				<Title type="subtitle" bold>
					bold subtitle
				</Title>
			</li>
			<li>
				<Title type="section-title">section title</Title>
			</li>
			<li>
				<Title type="section-title" bold>
					bold section title
				</Title>
			</li>
			<li>
				<Title type="section-subtitle">section subtitle</Title>
			</li>
			<li>
				<Title type="section-subtitle" bold>
					bold section subtitle
				</Title>
			</li>
		</ul>
	))
