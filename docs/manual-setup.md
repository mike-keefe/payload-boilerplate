# Manual Setup (without Claude Code)

If you are not using Claude Code, follow these steps after cloning.

## 1. Environment

```bash
cp .env.example .env
# Edit .env — see .env.example for documentation on each variable
# Generate a PAYLOAD_SECRET with: openssl rand -base64 32
```

## 2. Dependencies

```bash
pnpm install
```

## 3. Database

```bash
docker-compose up -d   # Start PostgreSQL
pnpm run db:migrate    # Run migrations
```

## 4. Development

```bash
pnpm run dev
```

## 5. Complete the setup checklist manually

Work through the sections in `.claude/commands/setup.md` manually:

- Fill in project details in `README.md`, `CLAUDE.md`, `docs/deployment.md`
- Create your Payload collections in `src/collections/`
- Update `.env.example` with any project-specific variables
- Write an ADR for key technical decisions in `docs/decisions/`

## 6. Mark setup complete

```bash
mkdir -p .claude/state
echo "$(date -I)" > .claude/state/setup-complete
```
