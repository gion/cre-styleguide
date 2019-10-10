import { configure, addParameters } from '@storybook/react'

const req = require.context('../src/components', true, /[^/]+\/stories.(js|mdx)$/)

function loadStories() {
	req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
