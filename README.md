# Payload CMS Project Template

A production-ready Payload CMS 3.x + Next.js template with guided project setup built in.

## Using this template

1. Click **"Use this template"** on GitHub to create a new repo
2. Clone your new repo locally
3. Open Claude Code: `claude`
4. Claude will automatically detect this is a fresh clone and guide you through setup

The guided setup will:

- Interview you about what you're building
- Configure the project for your specific needs
- Generate research tasks and investigate them in parallel
- Scaffold your initial Payload collections
- Leave the project ready to build

## What's included

| Category        | Tools                                                             |
| --------------- | ----------------------------------------------------------------- |
| Framework       | Next.js App Router + Payload CMS 3.x                              |
| Language        | TypeScript (strict mode)                                          |
| Database        | PostgreSQL                                                        |
| Package manager | pnpm                                                              |
| Linting         | ESLint (flat config) + Prettier + Husky pre-commit hooks          |
| Testing         | Vitest + React Testing Library + Playwright                       |
| CI/CD           | GitHub Actions (validate → test → build)                          |
| Security        | Secret scanning (gitleaks), dependency auditing, security headers |
| Observability   | Sentry scaffold, structured logging, health check endpoint        |
| Local dev       | Docker Compose (PostgreSQL)                                       |
| DX              | Claude Code commands, CLAUDE.md, CONTRIBUTING.md                  |

## Manual setup (without Claude Code)

If you're not using Claude Code, follow the manual setup in [`docs/manual-setup.md`](docs/manual-setup.md).

## Template maintenance

This template is maintained separately from client projects.
Do not copy client-specific config back into this template.
