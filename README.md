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

Content uses an in-memory SQLite DB by default (`content.database.filename: ':memory:'`) so the read-only Nix store does not break blog queries. To persist the DB on a writable path instead, set `CONTENT_DATABASE_PATH` at **build** time (e.g. `/tmp/wcms-landing-contents.sqlite`).

### Nuxt Studio

Studio lets editors publish content changes from production. Configure at least one auth provider below. Environment variables use the `STUDIO_*` prefix (see [nuxt-studio auth docs](https://nuxt.studio/auth-providers)).

OAuth callback paths use `/__nuxt_studio/auth/<provider>` (double underscore) — not `/_studio/auth/...`.

#### GitHub OAuth

Editors sign in with GitHub; the OAuth token is used for Git operations automatically.

1. Create an app at https://github.com/settings/developers
2. Homepage URL: `https://www.vinoteqa.com` (or `http://localhost:3000` for local)
3. Authorization callback URL:
   - Local: `http://localhost:3000/__nuxt_studio/auth/github`
   - Prod: `https://www.vinoteqa.com/__nuxt_studio/auth/github`
4. Set on the host (or in `.env` for local `yarn preview`):

```bash
STUDIO_GITHUB_CLIENT_ID=...
STUDIO_GITHUB_CLIENT_SECRET=...
```

#### Google OAuth

Editors sign in with Google. Google does not provide Git access, so you must also set a GitHub personal access token (`STUDIO_GITHUB_TOKEN`) with write access to the repository. Only emails listed in `STUDIO_GOOGLE_MODERATORS` can access Studio.

1. Create a Web application OAuth client at https://console.cloud.google.com/apis/credentials
2. Authorized redirect URIs:
   - Local: `http://localhost:3000/__nuxt_studio/auth/google`
   - Prod: `https://www.vinoteqa.com/__nuxt_studio/auth/google`
3. Set on the host (or in `.env` for local `yarn preview`):

```bash
STUDIO_GOOGLE_CLIENT_ID=...
STUDIO_GOOGLE_CLIENT_SECRET=...
STUDIO_GOOGLE_MODERATORS=editor@example.com,admin@example.com
STUDIO_GITHUB_TOKEN=...   # PAT with repo write access
```

If you are behind a reverse proxy and Google reports `redirect_uri_mismatch`, set `STUDIO_GOOGLE_REDIRECT_URL` to the exact public callback URL.

You can configure both GitHub and Google OAuth; Studio shows a provider picker when multiple are set.

See `.env.example` for the full list of env vars.
