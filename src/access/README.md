# Access control

Reusable access control functions — `isAdmin`, `isOwnerOrAdmin`, `isPublished`, etc.

Always extract non-trivial access logic here rather than inlining it in collection configs. Name functions after the predicate they express.
