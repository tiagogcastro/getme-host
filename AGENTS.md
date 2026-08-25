# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Getme Host: marketing site for a hosting provider (web hosting, VPS and
TeamSpeak plans). JavaScript React app built with CRA 4 (2020-2021 era).

## Commands

```bash
yarn install
yarn start    # http://localhost:3000
```

## Structure

- `src/pages`: home, hosting, servers (VPS), teamspeak
- `src/components/AllConfigCardsOther`: single source of truth for pricing cards and plan texts; edit here instead of page code
- `src/components/partesConfiguraveis`: configurable page sections
- `src/Routes`: react-router-dom route definitions

## Rules for agents

- Docs-only maintenance phase: no dependency upgrades or runtime behavior changes
- Pricing/content edits belong in AllConfigCardsOther, not in page components
