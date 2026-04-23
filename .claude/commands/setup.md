# Project Setup

You are running the guided setup for a new Payload CMS project based on this template.
Work through every phase below in order. Do not skip phases or proceed without the developer's input at the checkpoints marked **[CHECKPOINT]**.

When setup is complete, write the file `.claude/state/setup-complete` with the current date as its contents.

---

## Phase 0 — Welcome

Tell the developer:

> "Welcome to the Payload CMS project template. I'm going to guide you through a short discovery process to understand what you're building, then configure this repo for your specific project. This will take about 10–15 minutes. Let's start."

Then ask the following questions. Ask each group, wait for answers, and summarise back before moving on.

**Group A — Project purpose**

1. What is this project for? (Client website, internal tool, SaaS, e-commerce, portfolio, other?)
2. Who are the end users? (General public, authenticated members, admin only, a mix?)
3. Is there an existing site being replaced, or is this greenfield?
4. Do you have a launch deadline or timeline?

**[CHECKPOINT A]** Summarise answers. Ask: "Is this correct? Shall I continue to content and features?"

**Group B — Content and features**

1. What types of content will the site manage? (Pages, blog posts, products, events, team members, etc.)
2. Will users be able to log in or create accounts on the frontend?
3. Do you need e-commerce, bookings, or transactional flows?
4. Multiple languages?
5. Any third-party services you already know you need? (Payments, email, CRM, analytics, maps, etc.)

**[CHECKPOINT B]** Summarise. Ask: "Correct? Shall I continue to technical setup?"

**Group C — Technical constraints**

1. Preferred hosting? (Vercel, Railway, AWS, other — or not decided yet?)
2. Any reason NOT to use PostgreSQL? (PostgreSQL is the default)
3. Do you need a staging environment?
4. Is there a domain already arranged?
5. Any compliance requirements? (GDPR is assumed for UK/EU — anything beyond that? Accessibility level?)

**Group D — Team**

1. Working alone or with other developers?
2. Will a non-technical client need to review work?
3. What is the client or project name? (Used to name the repo and branding)

**[CHECKPOINT D]** Present a full **Project Brief** (max 300 words) covering: purpose, users, features, technical decisions, and any risks or unknowns. Ask: "Is this accurate? Once confirmed, I'll configure the project and generate research tasks."

---

## Phase 1 — Configure the project

Using the answers from Phase 0, do all of the following:

1. **Update `README.md`** — replace all placeholder text with real project details from the brief

2. **Update `CLAUDE.md`** — fill in the project overview section with the real project name, purpose, and tech decisions

3. **Update `docs/compliance/GDPR.md`** — populate the "Third-party processors" section with any services mentioned in discovery

4. **Update `docs/deployment.md`** — fill in the hosting environment if decided, otherwise note "TBD — to be decided"

5. **Update `SECURITY.md`** — replace `CONTACT_EMAIL_PLACEHOLDER` with the correct contact if provided

6. **Update `.env.example`** — add placeholder sections for any third-party services mentioned (Stripe, SendGrid, etc.) with comments

7. **Create `docs/decisions/ADR-001-project-overview.md`** — write an ADR summarising the key technical decisions made during discovery (hosting, auth approach, etc.)

8. **Commit everything** with message: `chore(setup): configure project from template for [project name]`

---

## Phase 2 — Generate research spikes

Based on the discovery answers, generate a list of research topics that need to be investigated before building begins. Each topic should be something where there is a real decision to make.

Common topics to consider (include only those relevant to this project):

- Authentication strategy (if user login is needed)
- Third-party service evaluation (for each service mentioned)
- Hosting platform comparison (if not yet decided)
- Content modelling approach (for the collections mentioned)
- Email delivery service (if transactional email is needed)
- Payment provider (if e-commerce)
- Media storage strategy (S3, Cloudinary, Payload local — which and why?)
- Deployment and CI/CD pipeline (how will the project deploy?)
- Performance and caching strategy

For each relevant topic, present it to the developer in this format:

```
**Research: [Topic]**
Why it matters: [one sentence]
Questions to answer:
  - [Q1]
  - [Q2]
  - [Q3]
Definition of done: Written recommendation in docs/decisions/[topic-slug].md
```

**[CHECKPOINT]** Show the full list and ask: "Shall I create these as GitHub issues and launch parallel research agents to investigate them now? Or would you like to adjust the list first?"

If approved:

1. Create a GitHub issue for each topic using the `gh` CLI:

   ```bash
   gh issue create --title "Research: [Topic]" --label "research,spike" --body "[body]"
   ```

2. Then spawn one sub-agent per topic using the Task tool. Each sub-agent should:
   - Research the topic thoroughly using web search and available knowledge
   - Consider the specific context of this project from the brief
   - Write a clear recommendation to `docs/decisions/[topic-slug].md` using the ADR format
   - Return a one-paragraph summary of its recommendation

3. Once all sub-agents complete, compile a **Research Summary** and present it:
   - Key recommendations from each topic
   - Any conflicts or dependencies between recommendations
   - Suggested order to address them

**[CHECKPOINT]** Ask: "Research complete. Shall I proceed to scaffold the initial Payload collections based on the content types you described?"

---

## Phase 3 — Scaffold initial collections

Based on the content types identified in discovery, scaffold a basic Payload collection config for each one.

For each collection:

1. Create `src/collections/[CollectionName].ts` with a sensible field structure
2. Register it in `src/payload.config.ts`
3. Create a corresponding type stub in `src/types/` if useful

Use these conventions:

- Always include `createdBy` (relationship to users) and timestamps (auto)
- Always include a `status` field (`draft` | `published`) unless the content type obviously doesn't need it
- Use `slug` fields (auto-generated from title) for any content that will have a public URL
- Add JSDoc comments on non-obvious fields explaining their purpose

After scaffolding all collections:

- Run `pnpm run db:generate` to regenerate types
- Run `pnpm run type-check` — fix any TypeScript errors before continuing
- Commit: `feat(collections): scaffold initial collections from project brief`

---

## Phase 4 — Final setup

1. Run `pnpm run validate` — fix any errors
2. Run `pnpm run test` — fix any failures
3. Confirm the dev server starts: `pnpm run dev`
4. Write `.claude/state/setup-complete` with today's date
5. Present a **Setup Complete** summary:
   - What was configured
   - What research was completed and where findings are stored
   - What collections were scaffolded
   - Recommended first tasks (suggest 3–5 concrete next steps)
   - Any items that were deferred or need the developer's attention

Tell the developer: "This project is now configured and ready to build. On future Claude Code sessions, setup will be skipped and you can work normally. Refer to CLAUDE.md for working conventions and CONTRIBUTING.md for Git workflow."
