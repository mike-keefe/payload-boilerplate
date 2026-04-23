import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['tests/int/**/*.int.spec.ts', 'tests/unit/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      thresholds: {
        // Starting thresholds — enforced to prevent coverage drifting to zero.
        // Raise these incrementally as the project grows.
        statements: 60,
        branches: 60,
        functions: 60,
        lines: 60,
      },
      exclude: [
        'node_modules/',
        'tests/',
        '.next/',
        'playwright.config.ts',
        'vitest.config.mts',
        'vitest.setup.ts',
        'next.config.ts',
        'src/payload-types.ts',
        'src/payload-generated-schema.ts',
      ],
    },
  },
})
