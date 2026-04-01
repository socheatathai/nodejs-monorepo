# @nodejs-monorepo/tsconfig

Shared TypeScript configurations for the nodejs-monorepo monorepo.

## Usage

### For Node.js/Backend Apps

```json
{
  "extends": "@nodejs-monorepo/tsconfig/base.json"
}
```

### For React Apps

```json
{
  "extends": "@nodejs-monorepo/tsconfig/react.json"
}
```

## Included Configurations

- **base.json**: Base configuration for Node.js backends
  - Target: ES2020
  - Strict mode enabled
  - Proper module resolution for Node.js

- **react.json**: Configuration for React applications
  - Extends base config
  - JSX support with react-jsx
  - DOM libraries included
  - No emit (uses build tools)

## Customization

To extend these configs for a specific app, create a `tsconfig.json`:

```json
{
  "extends": "@nodejs-monorepo/tsconfig/base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```
