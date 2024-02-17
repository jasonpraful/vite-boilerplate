import { expect, test } from '@playwright/test'

test.describe.configure({ mode: 'parallel' })
test.describe('counter', () => {
	test('has Heading', async ({ page }) => {
		await page.goto('http://localhost:4173')
		const text = await page.textContent('h1')
		expect(text).toBe('Vite + React + TailwindCSS + Zustand')
	})

	test('has zero', async ({ page }) => {
		await page.goto('http://localhost:4173')
		const text = await page.getByLabel('count').textContent()
		expect(text).toBe('0')
	})

	test('increments', async ({ page }) => {
		await page.goto('http://localhost:4173')
		await page.getByLabel('increment').click()
		const text = await page.getByLabel('count').textContent()
		expect(text).toBe('1')
	})

	test('decrements', async ({ page }) => {
		await page.goto('http://localhost:4173')
		await page.getByLabel('decrement').click()
		const text = await page.getByLabel('count').textContent()
		expect(text).toBe('-1')
	})
})
