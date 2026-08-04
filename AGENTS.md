## Career application bridge

- When Jack sends a public job-posting URL, including a URL-only message, treat it as a request to complete the application materials. Do not end with a role summary or ask whether he wants help.
- Locate the sibling private repository at `../jknguyen-career` and read its `AGENTS.md`, `.claude/skills/application-manager/SKILL.md`, and `.claude/skills/resume-tailor/SKILL.md` before responding.
- Run the Career OS direct HTTP intake and exact-source workflow there. Never substitute computer use, browser automation, search snippets, or job-board mirrors for the exact posting.
- When the posting is clear, create/update the Career OS application records and immediately generate and present both validated PDF artifacts. A link-only turn is complete only with clickable resume and cover-letter PDF paths or one concrete retrieval/factual blocker.
- Do not submit, send, schedule, commit, or push without separate explicit authorization.

## Public career data

- `src/data/profile.generated.json` is generated from the sibling private Career OS by `../jknguyen-career/career export public`; do not edit it by hand.
- Only the exact verified public fields in `../jknguyen-career/config/public-export.yaml` may enter this repository. Never copy private vault notes, sources, applications, contacts, review queues, or internal project evidence here.
- After an approved public-fact change, run `../jknguyen-career/career export public --portfolio-root . --apply`, then `npm test`, `npm run lint`, and `npm run build`.
- Keep project navigation limited to the generated project list. A project that is private, confidential, stale, unverified, or absent from the allowlist must not receive a public route.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
