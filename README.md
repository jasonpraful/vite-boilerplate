# Vite + React Boilerplate

<p align="center">
  <picture>
    <source srcset="https://vitejs.dev/logo.svg" media="(prefers-color-scheme: dark)">
    <img src="https://vitejs.dev/logo.svg" width="100" alt="Vite Boilerplate">
  </picture>
</p>
<p align="center">
  All in one front-end React + Vite.js + Tailwind + Zustand + Shadcn + AWS Infrastructure via Terraform
</p>

<p align="center">
  <img alt="Deployment Status" src="https://github.com/jasonpraful/vite-boilerplate/actions/workflows/deploy.yml/badge.svg"/>
</p>

## Features

- Vite.js
- React
- TypeScript
- Tailwind CSS
  - [with Shadcn Ui](https://ui.shadcn.com)
- Zustand (State Management)
- Vitest + React Testing Library
- Playwright (E2E Testing)
- All bolts Terraform infrastructure for AWS
  - S3
  - CloudFront (CDN)

## Getting Started

```bash
npx @jasonpraful/scripts
```

> Feeling adventurous? You can use the following commands to manually setup the
> project:

```bash
git clone https://github.com/jasonpraful/vite-boilerplate
cd vite-boilerplate
```

```bash
rm -rf .git && git init # Reset git & initialize new git
```

```bash
npm i
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Testing

```bash
npm run test:unit # Unit Test
npm run test:e2e # E2E Test (Playwright)
```

## Deployment

```bash
npm run tf:init # Initialize Terraform
npm run tf:plan # Plan Terraform
npm run tf:apply # Apply Terraform
```

## Versioning

```bash
npm run version # Changeset versioning
```

## Linting

```bash
npm run lint # Linting
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

## License

MIT
