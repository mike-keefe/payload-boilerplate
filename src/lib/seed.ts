// Database seed script.
// Run with: pnpm run db:seed
//
// Add seed data for development here. This file is never run in production.
// Use this to create admin users, sample content, and test fixtures.

import { getPayload } from 'payload'

import config from '@/payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Seeding database...')

  // Add seed operations here
  // Example:
  // await payload.create({
  //   collection: 'users',
  //   data: { email: 'admin@example.com', password: 'changeme' },
  // })

  void payload
  console.log('✅ Seed complete')
  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
