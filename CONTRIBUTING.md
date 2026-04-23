# Contributing

## Branching strategy

| Branch                  | Purpose                                            |
| ----------------------- | -------------------------------------------------- |
| `main`                  | Production. Protected.                             |
| `develop`               | Integration branch. All features merge here first. |
| `feature/[description]` | New features                                       |
| `fix/[description]`     | Bug fixes                                          |
| `chore/[description]`   | Deps, config, tooling                              |
| `docs/[description]`    | Documentation only                                 |

Never commit directly to `main` or `develop`.

## Commit messages

Format: `type(scope): description`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`

Examples:

```
feat(collections): add Events collection with location field
fix(auth): correct access control on user profile endpoint
chore(deps): update payload to 3.5.0
```

## Pull requests

1. Open a PR from your feature branch to `develop`
2. Fill in the PR template
3. `pnpm run validate` must pass before requesting review
4. One approval required before merging
5. Squash merge for feature branches

## Local setup

```bash
cp .env.example .env
# Fill in required values — see .env.example for what each one is
docker-compose up -d   # Start local PostgreSQL
pnpm install
pnpm run dev
```

## Before pushing

```bash
pnpm run validate   # Type check + lint + format check
pnpm run test       # Unit + integration + e2e tests
```
