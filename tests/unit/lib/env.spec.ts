import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'

describe('env validation', () => {
  const originalEnv = process.env

  beforeEach(() => {
    vi.resetModules()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('passes with all required variables set', async () => {
    process.env.DATABASE_URI = 'postgresql://user:pass@localhost:5432/db'
    process.env.PAYLOAD_SECRET = 'a'.repeat(32)
    process.env.NEXT_PUBLIC_SERVER_URL = 'http://localhost:3000'

    // Should not throw
    await expect(import('@/lib/env')).resolves.toBeDefined()
  })
})
