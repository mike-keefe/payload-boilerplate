# CLAUDE.md

This file is read automatically by Claude Code at the start of every session.

---

## FIRST: Check setup status

**Before doing anything else**, check whether this project has been set up:

```bash
cat .claude/state/setup-complete 2>/dev/null
```

- **If the file does not exist**: This is a fresh clone of the template. Run `/project:setup` immediately and do not proceed with any other work until setup is complete.
- **If the file exists**: Setup is done. Continue normally with the session.

---

## Project overview

<!-- Populated during setup -->

**Project name:** [To be configured during setup]
**Purpose:** [To be configured during setup]
**Client:** [To be configured during setup]
**Stack:** Payload CMS 3.x · Next.js App Router · TypeScript · PostgreSQL

---

## Repository structure

```
src/
  app/           # Next.js App Router pages and layouts
  collections/   # Payload CMS collection configs (one file per collection)
  globals/       # Payload CMS global configs
  fields/        # Reusable Payload field definitions
  blocks/        # Payload block configs for layout builder patterns
  hooks/         # Payload hooks (beforeChange, afterRead, etc.)
  access/        # Reusable access control functions
  components/
    ui/           # Primitive/atomic UI components
    layout/       # Layout wrappers (header, footer, nav)
    blocks/       # Frontend renderers for Payload blocks
  lib/            # Shared utilities and helpers
  types/          # Shared TypeScript types and interfaces
  styles/         # Global CSS
tests/
  int/           # Payload integration tests
  unit/          # Unit tests for utilities and pure functions
  e2e/           # Playwright end-to-end tests
  helpers/       # Shared test utilities and fixtures
```

---

## Development commands

```bash
pnpm run dev              # Start development server (localhost:3000)
pnpm run validate         # Type check + lint + format check (run before every commit)
pnpm run test             # Run integration + e2e tests
pnpm run test:watch       # Run unit/integration tests in watch mode
pnpm run test:coverage    # Run with coverage report
pnpm run test:e2e         # Run Playwright end-to-end tests only
pnpm run db:migrate       # Run database migrations
pnpm run db:seed          # Seed database with development data
pnpm run db:generate      # Regenerate Payload TypeScript types
docker-compose up -d      # Start local PostgreSQL
```

---

## Code conventions

### TypeScript

- Strict mode is enabled — no `any` without a comment explaining why
- Use `unknown` instead of `any` and narrow the type
- Use Zod for all runtime validation (forms, API input, environment variables)
- Use type-only imports: `import type { Foo } from '...'`

### Naming

- Components and types: `PascalCase`
- Functions, variables, hooks: `camelCase`
- Files: `kebab-case` (except components which match their export name)
- Database fields: `camelCase`

### Imports

- Always use `@/` absolute imports — never `../../relative/paths`
- Group: external packages → internal `@/` imports → relative (in that order)
- Run `pnpm run lint:fix` to auto-fix import ordering

### Payload collections

- One file per collection in `src/collections/`
- Export a single config object as the default export
- Register in `src/payload.config.ts`
- Always include: `status` (draft/published), `createdBy`, timestamps

### Access control

- All access functions in `src/access/` — never inline complex logic in collection config
- Name functions descriptively: `isAdmin`, `isOwnerOrAdmin`, `isPublished`

### Hooks

- All Payload hooks in `src/hooks/`
- One file per hook function
- Document with JSDoc: what it does, when it runs, what it modifies

---

## Package manager

This project uses **pnpm** — never `npm` or `yarn`. The lockfile is `pnpm-lock.yaml` and `engines.pnpm` is enforced in `package.json`.

---

## Git workflow

See `CONTRIBUTING.md` for full details. Summary:

- Branch from `develop`, merge back to `develop` via PR
- Commit format: `type(scope): description` (Conventional Commits)
- Never commit to `main` or `develop` directly
- Run `pnpm run validate` before every push

---

## Working with Claude Code — important rules

1. **Always run `pnpm run validate` after making changes.** A task is not complete until validation passes.

2. **When adding a new Payload collection:**
   - Create the collection config in `src/collections/`
   - Register it in `src/payload.config.ts`
   - Run `pnpm run db:generate` to update types
   - Add at least one integration test in `tests/int/`
   - Run `pnpm run validate`

3. **When modifying access control**, state explicitly in your commit message what the before/after behaviour is.

4. **Prefer small focused commits** over large changesets. If a task requires 200+ lines of changes, pause and confirm before continuing.

5. **Never commit:**
   - `.env` or `.env.local` files
   - API keys, tokens, or secrets of any kind
   - `node_modules/`
   - `.next/` build output

6. **Never import Payload directly in frontend components.** Use server actions, API routes, or Payload's local API called from server components only.

7. **When in doubt about a decision**, create an ADR in `docs/decisions/` before proceeding.

---

## Common pitfalls

| Pitfall                                                   | What to do instead                              |
| --------------------------------------------------------- | ----------------------------------------------- |
| `import { payload } from 'payload'` in a client component | Use server actions or API routes                |
| `const x: any = ...`                                      | Use `unknown` + type narrowing, or a Zod schema |
| Hardcoding env vars                                       | Add to `.env.example` and use `src/lib/env.ts`  |
| Complex access logic inline in collection                 | Extract to `src/access/`                        |
| `console.log` for operational logging                     | Use `src/lib/logger.ts`                         |
| Relative imports like `../../../lib/...`                  | Use `@/lib/...`                                 |
