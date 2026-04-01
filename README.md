# nodejs-monorepo

Monorepo for multiple React and Node.js apps managed with pnpm workspaces and Turborepo.

## Stack

- Node.js
- pnpm workspaces
- Turborepo
- React (CRA-based apps)
- Express-based APIs

## Repository Layout

```text
apps/
  client-image/
  image-backend/
  image-frontend/
  design-ui/
  nodejs-api/
  nodejs-deploy/
  nodejs-legacy/
  server-image/
  upload-image/

packages/
  config/          # shared env utilities
  eslint-config/   # shared eslint base config
  types/           # shared type/constants package
```

## Project Structure

### Apps

- `apps/client-image` (`@nodejs-monorepo/client-image`): React app for image upload client flow.
- `apps/image-backend` (`@nodejs-monorepo/image-backend`): Express backend for product image CRUD APIs.
- `apps/image-frontend` (`@nodejs-monorepo/image-frontend`): React frontend for product image CRUD UI.
- `apps/design-ui` (`@nodejs-monorepo/design-ui`): React UI playground/demo app.
- `apps/nodejs-api` (`@nodejs-monorepo/nodejs-api`): Main Node.js API variant.
- `apps/nodejs-deploy` (`@nodejs-monorepo/nodejs-deploy`): Deploy-oriented Node.js API clone.
- `apps/nodejs-legacy` (`@nodejs-monorepo/nodejs-legacy`): Legacy Node.js API version kept for compatibility.
- `apps/server-image` (`@nodejs-monorepo/server-image`): Express + MySQL image server.
- `apps/upload-image` (`@nodejs-monorepo/upload-image`): Node.js image upload service variant.

### Shared Packages

- `packages/config` (`@nodejs-monorepo/config`): Shared environment loader and helpers.
- `packages/eslint-config` (`@nodejs-monorepo/eslint-config`): Shared lint rules used by apps.
- `packages/types` (`@nodejs-monorepo/types`): Shared type declarations/constants.

## Package Naming Convention

All workspace packages use the same scope:

- apps: `@nodejs-monorepo/<app-name>`
- shared packages: `@nodejs-monorepo/config`, `@nodejs-monorepo/types`, `@nodejs-monorepo/eslint-config`

## Getting Started

1. Install dependencies

```bash
pnpm install
```

1. Run lint in all workspaces

```bash
pnpm lint
```

1. Build all workspaces

```bash
pnpm build
```

1. Run dev tasks in parallel

```bash
pnpm dev
```

## Root Scripts

- `pnpm dev` -> `turbo run dev --parallel`
- `pnpm build` -> `turbo run build`
- `pnpm test` -> `turbo run test`
- `pnpm lint` -> `turbo run lint`
- `pnpm clean` -> `turbo run clean`

## Environment Setup

Use templates to create local `.env` files:

- root template: `.env.example`
- app templates: `apps/*/.env.example`

Copy the example file in each app you run and fill values for:

- `PORT`
- `ALLOWED_ORIGINS`
- `JWT_SECRET` (API apps)
- `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` (API apps)
- `REACT_APP_API_URL` (frontend apps)

## CI

GitHub Actions workflow is defined in:

- `.github/workflows/ci.yml`

Behavior:

- pull requests: affected lint/build/test
- pushes to main: full lint/build/test

## Notes

- Legacy API apps are kept as separate apps for now: `nodejs-api`, `nodejs-deploy`, `nodejs-legacy`.
- Lint warnings in app code should be fixed incrementally as part of ongoing hardening.
