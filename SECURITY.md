# Security Policy

## Reporting a vulnerability

If you discover a security vulnerability, please do **not** open a public GitHub issue.

Email [CONTACT_EMAIL_PLACEHOLDER] with:

- A description of the vulnerability
- Steps to reproduce
- Potential impact

You can expect acknowledgement within 48 hours.

## Security practices

- Dependencies scanned weekly via `pnpm audit`
- Dependabot enabled for automated dependency updates
- Secrets managed via environment variables — never committed to version control
- Gitleaks scans run on every push to catch accidentally committed secrets
- All PRs require code review before merging to `main`
