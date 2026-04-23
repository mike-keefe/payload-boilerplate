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
        // Template baseline — intentionally low because the template itself
        // only ships stubs. These values act as a ratchet: CI fails if coverage
        // drops below what the template achieves today. Raise them as you add
        // real code and tests (e.g. once you have collections + services wired up,
        // a sensible first step is to set all four to 60).
        statements: 50,
        branches: 40,
        functions: 0,
        lines: 50,
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
