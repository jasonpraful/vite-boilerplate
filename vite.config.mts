/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		globals: true,
		setupFiles: './vitest.setup.ts',
		environment: 'jsdom',
		css: true,
		include: ['**/*.test.tsx', '**/*.test.ts'],
		coverage: {
			provider: 'istanbul',
			include: ['src/**/*.tsx', 'src/**/*.ts'],
			exclude: ['src/main.tsx'],
			reporter: ['html', 'lcov'],
			reportsDirectory: 'test-results/coverage',
		},
	},
	plugins: [react(), tsconfigPaths()],
})
