# Sveltekit skeleton template with SSR Firebase authentication

Skeleton Sveltekit app for projects with firebase user authentication and ssr-protected routes.
Firebase access token (UserId token) is encoded in session cookie.
Cookie is being updated along with Firebase client access token rotation.

Sveltekit server handle hook uses "token" cookie to authenticate user with Firebase admin app.

Main protected route (e.g. /dashboard ) is defined in `hooks.server.ts`.

## Getting started


- Unpack the project root or clone it with git.

- Install dependenceis with preferred package manager:

```bash
npm install
```

or 

```bash
yarn install
```

- Fill in env variables inside `.env` in your project root.

- Run the app with `npm run dev`
- Navigate to `/login` route and authenticate with Firebase, then check ssr user data inside `/dashboard` page.

## FAQ

::TODO

## Based on:

[Accessing the Firebase Auth user in SvelteKit server-side by Jeroen Pelgrims](https://jeroenpelgrims.com/access-the-firebase-auth-user-in-sveltekit-server-side/)



