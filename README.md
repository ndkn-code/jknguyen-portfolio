# Jack Nguyen portfolio

Public Next.js portfolio for Jack Nguyen's product and data work.

## Local development

```text
npm install
npm run dev
```

The project uses the installed Next.js documentation under `node_modules/next/dist/docs/` as the version-specific implementation reference.

## Public career data

Profile, experience, project-card, metadata, and project-navigation facts come from `src/data/profile.generated.json`. That file is a sanitized, deterministic export from the sibling private Career OS; it is not edited manually.

From `../jknguyen-career`:

```text
./career export public
./career export public --apply
./career export public --check
```

The allowlist selects exact `public_*` fields from verified, public, non-stale claims. Private sources, applications, contacts, review notes, and confidential projects are excluded.

## Verification

```text
npm test
npm run lint
npm run build
```

`npm run build` checks the generated data schema, SHA-256 identity, privacy boundary, approved routes, and forbidden private claims before compiling the portfolio.
