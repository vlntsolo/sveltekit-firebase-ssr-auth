# Sveltekit skeleton template with SSR Firebase authentication

Skeleton Sveltekit app for projects with firebase user authentication and ssr-protected routes.
Firebase access token (UserId token) is encoded in session cookie.
Cookie is being updated along with Firebase client access token rotation.

### Additional packages

- Includes Tailwind configuration

### Implementation

Sveltekit server `handle` hook uses "token" cookie to authenticate user with Firebase admin app.

Main protected route (e.g. /dashboard ) is defined in `hooks.server.ts`.

## Getting started


- Unpack the project zip or pull the [remote](https://github.com/vlntsolo/sveltekit-firebase-ssr-auth.git).

- Install dependenceis with preferred package manager:

```bash
npm install
```
or 
```bash
yarn install
```

- Create `.env` in your project root and fill in env variables according to `.env-sample`.

- Run the app with `npm run dev`
- Navigate to `/login` route and authenticate with Firebase, then check ssr user data inside `/dashboard` page.

## FAQ

::TODO

## Based on:

[Accessing the Firebase Auth user in SvelteKit server-side by Jeroen Pelgrims](https://jeroenpelgrims.com/access-the-firebase-auth-user-in-sveltekit-server-side/)



