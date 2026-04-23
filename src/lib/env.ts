import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URI: z.string().min(1, 'DATABASE_URI is required'),
  PAYLOAD_SECRET: z.string().min(32, 'PAYLOAD_SECRET must be at least 32 characters'),
  NEXT_PUBLIC_SERVER_URL: z.string().url('NEXT_PUBLIC_SERVER_URL must be a valid URL'),
  SENTRY_DSN: z.string().optional(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error('❌ Invalid environment variables:\n')
  parsed.error.issues.forEach((issue) => {
    console.error(`  ${issue.path.join('.')}: ${issue.message}`)
  })
  console.error('\nCheck .env.example for documentation on each variable.\n')
  process.exit(1)
}

export const env = parsed.data
