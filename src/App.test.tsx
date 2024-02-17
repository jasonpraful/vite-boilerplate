import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
	it('renders heading', () => {
		const { getByText } = render(<App />)
		expect(
			getByText('Vite + React + TailwindCSS + Zustand'),
		).toBeInTheDocument()
	})

	it('renders count', () => {
		const { getByLabelText } = render(<App />)
		expect(getByLabelText('count')).toBeInTheDocument()
		expect(getByLabelText('count')).toHaveTextContent('0')
	})

	it('increments and decrements count', () => {
		const { getByLabelText } = render(<App />)
		act(() => {
			getByLabelText('decrement').click()
		})
		expect(getByLabelText('count')).toHaveTextContent('-1')
		act(() => {
			getByLabelText('increment').click()
		})
		expect(getByLabelText('count')).toHaveTextContent('0')
	})
})
