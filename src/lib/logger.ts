// Structured logging utility.
// Rules:
// - NEVER log PII (emails, names, passwords, tokens) — log IDs only
// - Use logger.info for normal operations, logger.warn for unexpected but
//   handled situations, logger.error for failures that need attention
// - In production, replace this with Pino or a similar structured logger

const isDev = process.env.NODE_ENV === 'development'

export const logger = {
  info: (message: string, context?: Record<string, unknown>) => {
    if (isDev) console.info('[INFO]', message, context ?? '')
  },
  warn: (message: string, context?: Record<string, unknown>) => {
    console.warn('[WARN]', message, context ?? '')
  },
  error: (message: string, error?: unknown, context?: Record<string, unknown>) => {
    console.error('[ERROR]', message, error ?? '', context ?? '')
  },
}
