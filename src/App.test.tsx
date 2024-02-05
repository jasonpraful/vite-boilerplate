import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
	it('renders hello world', () => {
		const { getByText } = render(<App />)
		expect(getByText('Hello, world!👋')).toBeInTheDocument()
	})
})
