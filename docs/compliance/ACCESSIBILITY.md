# Accessibility Standard

## Target compliance

WCAG 2.1 Level AA

## Conventions

- All images must have meaningful alt text, or `alt=""` if decorative
- All interactive elements must be keyboard accessible
- Colour contrast ratio: 4.5:1 for normal text, 3:1 for large text
- Form fields must have associated labels
- Error messages must be programmatically associated with their input

## Tools

- `eslint-plugin-jsx-a11y` is installed and enforced in CI
- Manual testing: keyboard navigation, VoiceOver (macOS), NVDA (Windows)

## Pre-launch checklist

- [ ] Full keyboard navigation audit
- [ ] Screen reader test
- [ ] Colour contrast audit
- [ ] axe automated scan passes with zero critical violations
