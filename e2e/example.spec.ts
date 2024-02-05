import { expect, test } from '@playwright/test'

test('has Hello World', async ({ page }) => {
	await page.goto('http://localhost:4173')
	const text = await page.textContent('h1')
	expect(text).toBe('Hello, world!👋')
})
