# Collections

Payload CMS collection configs. One file per collection.

Each file exports a single `CollectionConfig` as its default export and is registered in `src/payload.config.ts`. Follow the repo-wide conventions defined in `CLAUDE.md` — every collection should include a `status` field (draft/published) unless it clearly doesn't need one, and relationships should use the collection's `slug`.
