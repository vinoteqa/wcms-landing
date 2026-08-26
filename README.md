# Vinoteqa Website and Blog

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

In development, open the floating Studio button (bottom-left) or visit `/_studio` to edit content against the local filesystem.

## Production

Build and preview:

```bash
yarn build
yarn preview
```

Production hosting runs as a **Node SSR server** via the Nix package (`wcms-landing`). Static Netlify deploy is not used for Studio.

### Nuxt Studio (GitHub OAuth)

Studio needs a GitHub OAuth App so editors can publish from production:

1. Create an app at https://github.com/settings/developers
2. Homepage URL: `https://www.vinoteqa.com` (or `http://localhost:3000` for local)
3. Authorization callback URL (note the **double** underscore `__nuxt_studio`):
   - Local: `http://localhost:3000/__nuxt_studio/auth/github`
   - Prod: `https://www.vinoteqa.com/__nuxt_studio/auth/github`
4. Copy Client ID and Client Secret into the host environment:

```bash
STUDIO_GITHUB_CLIENT_ID=...
STUDIO_GITHUB_CLIENT_SECRET=...
```

See `.env.example` for the full list of env vars.
