# Contributing Guide

## Welcome to nodejs-monorepo! 👋

This monorepo uses **pnpm workspaces** and **Turborepo** for management. Follow this guide to set up your development environment and contribute effectively.

## Prerequisites

- **Node.js** 20.x or higher
- **pnpm** 10.x or higher (`npm install -g pnpm`)
- **Git** (for version control)

## Setup

### 1. Initial Installation

```bash
# Clone the repository
git clone https://github.com/socheatathai/nodejs-monorepo.git
cd nodejs-monorepo

# Install all dependencies
pnpm install
```

### 2. Environment Configuration

Create `.env` files for database and API credentials. Use provided `.env.example` files as templates:

```bash
# Root environment (optional)
cp .env.example .env

# Per-app environments
cp apps/nodejs-api/.env.example apps/nodejs-api/.env
cp apps/client-image/.env.example apps/client-image/.env
# ... repeat for other apps needing custom env
```

**Common Environment Variables:**
- `PORT`: Server port (default: 3000 for frontends, 5000 for backends)
- `REACT_APP_API_URL`: API endpoint for React apps (e.g., `http://localhost:5000`)
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`: MySQL connection details
- `JWT_SECRET`: Secret key for token signing

### 3. Database Setup

For apps using MySQL (nodejs-api, server-image, etc.):

```bash
# 1. Ensure MySQL is running
# 2. Create database
mysql -u root -p < apps/nodejs-api/node_api.sql

# 3. Update .env with credentials
```

## Development Workflow

### Running the Monorepo

```bash
# Start all dev servers in parallel
pnpm dev

# Build all packages
pnpm build

# Run linting
pnpm lint

# Check TypeScript types (recommended before commit)
pnpm type-check

# Format code
pnpm format

# Run tests (when implemented)
pnpm test

# Clean build artifacts
pnpm clean
```

### Running Specific Apps

```bash
# Run a single app
pnpm --filter @nodejs-monorepo/client-image dev

# Build a specific app
pnpm --filter @nodejs-monorepo/nodejs-api build

# Lint a specific app
pnpm --filter @nodejs-monorepo/server-image lint

# Type-check a specific app
pnpm --filter @nodejs-monorepo/nodejs-api type-check
```

## Backend App Selection

This project contains multiple backend applications. Please refer to the app's README for details:

- **`nodejs-api`** - Main production API with Express + MySQL
- **`server-image`** - Image upload server
- **`upload-image`** - Image management service
- **`image-backend`** - CRUD operations for image database
- **`nodejs-deploy`** - Deployment-ready variant
- **`nodejs-legacy`** - Legacy version (for reference only)

When contributing, use **`nodejs-api`** as the primary backend unless specifically working on another module.

### Useful pnpm Commands

```bash
# List all packages
pnpm ls -r

# Add dependency to specific package
pnpm add axios --filter @nodejs-monorepo/client-image

# Add dev dependency to all packages
pnpm add -D typescript -w

# Show dependency tree
pnpm ls --depth=5

# Update all dependencies
pnpm update -r

# Install from lock file only
pnpm install --frozen-lockfile
```

## Adding a New App

### 1. Create App Directory

```bash
mkdir apps/my-new-app
cd apps/my-new-app
```

### 2. Create package.json

**For React apps (from Create React App):**

```json
{
  "name": "@nodejs-monorepo/my-new-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "dev": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "lint": "eslint . --config ../../packages/eslint-config/base.cjs --ext .js,.jsx"
  },
  "devDependencies": {
    "@testing-library/react": "^13.4.0"
  }
}
```

**For Node.js apps:**

```json
{
  "name": "@nodejs-monorepo/my-new-app",
  "version": "1.0.0",
  "private": true,
  "main": "server.js",
  "scripts": {
    "dev": "node server.js",
    "build": "node -c server.js",
    "test": "echo \"Tests pending\"",
    "lint": "eslint . --config ../../packages/eslint-config/base.cjs --ext .js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "@nodejs-monorepo/config": "workspace:*"
  }
}
```

### 3. Create .env.example

```bash
# apps/my-new-app/.env.example
PORT=5000
NODE_ENV=development
REACT_APP_API_URL=http://localhost:5000
```

### 4. Add to pnpm-workspace.yaml

Automatically included via `apps/*` glob pattern.

## Code Quality Standards

### Linting

All apps share the same ESLint configuration from `packages/eslint-config`:

```bash
# Check linting errors
pnpm lint

# Fix auto-fixable errors
pnpm lint --fix
```

**ESLint Rules:**
- Strict equality (`===`)
- No unused variables
- No undef globals
- Accessibility warnings for React (alt text, ARIA labels)

### Type Checking

TypeScript type safety is enforced for better code quality:

```bash
# Check types across all packages
pnpm type-check

# Check types for a specific app
pnpm --filter @nodejs-monorepo/nodejs-api type-check
```

**Best Practices:**
- Always run `pnpm type-check` before committing
- Fix type errors in CI, not in deployment
- Use strict mode in `tsconfig.json`

### Formatting

All code is formatted with Prettier:

```bash
# Format all files
pnpm format

# Check if formatted
pnpm format:check
```

**Configuration:** See `.prettierrc`

### Git Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification for clear, standardized commit messages.

#### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Commit Types

| Type | Purpose | Example |
|------|---------|---------|
| **feat** | A new feature | `feat(nodejs-api): add user authentication` |
| **fix** | A bug fix | `fix(client-image): resolve image timeout` |
| **docs** | Documentation changes | `docs(readme): update setup instructions` |
| **style** | Code formatting (no logic change) | `style(monorepo): run prettier` |
| **refactor** | Code refactoring | `refactor(server-image): simplify handler` |
| **perf** | Performance improvements | `perf(nodejs-api): optimize queries` |
| **test** | Add or update tests | `test(upload-image): add unit tests` |
| **chore** | Build/tooling changes | `chore(monorepo): update dependencies` |
| **ci** | CI/CD configuration | `ci: add GitHub Actions workflow` |

#### Scopes

Use app/package names or:
- `monorepo` — Workspace-wide changes
- `ci` — CI/CD pipeline changes
- `docs` — Documentation only
- `deps` — Dependency updates

#### Examples

**Simple feature:**
```
feat(client-image): add image preview modal
```

**Bug fix:**
```
fix(nodejs-api): prevent race condition in auth
```

**With body and footer:**
```
feat(server-image): add WebP image compression

Implement WebP compression for uploaded images
to reduce storage and bandwidth usage.

Closes #123
```

**Breaking changes (use `!` before colon):**
```
feat(image-backend)!: redesign API response

BREAKING CHANGE: Response format changed from object to array
```

#### Writing Good Commits

✅ **DO:**
- Use imperative mood ("add feature" not "added feature")
- Write subject line ≤ 50 characters
- Capitalize first letter
- Reference issue numbers (Closes #123, Refs #456)
- Keep commits focused and atomic
- Explain **why**, not just what

❌ **DON'T:**
- Use vague messages ("update", "fix stuff")
- Combine unrelated changes
- Use all caps
- End subject with period

## Testing Guidelines

### React Apps

React apps use Jest (via react-scripts):

```bash
# In apps/client-image/
pnpm test

# Run in watch mode
pnpm test --watch

# Generate coverage
pnpm test --coverage
```

### Node.js Apps

Add Jest for server-side testing:

```bash
# Add Jest to an app
pnpm add -D jest --filter @nodejs-monorepo/nodejs-api

# Create __tests__/app.test.js
# Run tests
pnpm --filter @nodejs-monorepo/nodejs-api test
```

## Deployment

### Building for Production

```bash
# Build all apps
pnpm build

# Output locations:
# - React: apps/*/build/
# - Node.js: Apps run directly
```

### Docker Deployment

Each backend app can be containerized:

```dockerfile
# Dockerfile in apps/nodejs-api/
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN pnpm install --prod
CMD ["node", "server.js"]
```

Deploy with:

```bash
docker build -t nodejs-monorepo/nodejs-api apps/nodejs-api/
docker run -p 5000:5000 nodejs-monorepo/nodejs-api
```

## Troubleshooting

### Issue: `pnpm install` fails

```bash
# Clear lockfile and reinstall
rm pnpm-lock.yaml
pnpm install

# Or force install from scratch
pnpm install --force
```

### Issue: Port already in use

```bash
# Change port in .env
PORT=3001 pnpm --filter @nodejs-monorepo/client-image dev

# Or kill process on port 3000
# Windows: netstat -ano | findstr :3000
# macOS/Linux: lsof -i :3000 | kill -9 <PID>
```

### Issue: Module not found errors

```bash
# Ensure shared packages are correctly referenced
# In package.json, shared packages should use workspace:* protocol:
"@nodejs-monorepo/config": "workspace:*"

# Then reinstall
pnpm install
```

### Issue: Build fails for React app

```bash
# Clear cache and rebuild
pnpm --filter @nodejs-monorepo/client-image clean
pnpm --filter @nodejs-monorepo/client-image build
```

## Repository Structure

```
.
├── apps/                    # Application packages
│   ├── client-image/
│   ├── nodejs-api/
│   └── ... (9 total)
├── packages/                # Shared packages
│   ├── config/              # Env loader
│   ├── eslint-config/       # Shared lint rules
│   └── types/               # Shared constants
├── .github/
│   └── workflows/           # CI/CD workflows
├── .prettierrc             # Code formatting rules
├── pnpm-workspace.yaml     # Workspace configuration
├── turbo.json              # Turborepo pipeline
└── package.json            # Root scripts
```

## Getting Help

- **Documentation:** See [README.md](./README.md)
- **Issues:** Check GitHub Issues for known problems
- **Team:** Ask in team Slack/Discord channel

## Code Review Checklist

Before submitting a PR:

- ✅ TypeScript passes type-check (`pnpm type-check`)
- ✅ All tests pass (`pnpm test`)
- ✅ Code passes linting (`pnpm lint`)
- ✅ Code is formatted (`pnpm format:check`)
- ✅ Commit messages follow conventions
- ✅ `.env.example` updated if adding new env vars
- ✅ Dependencies are minimal (check `pnpm ls @app`)
- ✅ Documentation updated if needed
- ✅ No unused imports or variables

## Resources

- [pnpm Documentation](https://pnpm.io/)
- [Turborepo Documentation](https://turbo.build/)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Prettier Docs](https://prettier.io/docs/)

---

**Happy coding!** 🚀
