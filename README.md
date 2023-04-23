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

1. Is it safe to pass Firebase user ID token with exposed cookie (or as a Bearer token)?

Saving firebase user ID in the cookie storage without `http-only` is an equivalent of Firebase client local storage state persistance.
When Firebase client is set to persist state in browser local storage it keeps its access and refresh tokens there. And sts access token is the same as Firebase user Id token.

Firebase client SDK rotates access/user id token regularly and that should be enough security-wise in the most use cases.

2. Is it possible to verify cookie on per route basis without using `hooks.server.ts` and `url.pathnam` match?

Yes. In his how-to article Jeroen Pelgrims uses `layout.server.ts` `load` function to authenticate user.

3. Can I set `http-only` cookie?

Yes, it's possible to use http-only cookie, but that requires different implementation - one should use Sveltekit server endpoint in login flow to issue new http-only cookie and set in the response to the client. See [Firebase documentation on session cookies](https://firebase.google.com/docs/auth/admin/manage-cookies).

In this case authentication is handled purely server-side and Firebase client sdk persistance can be set to `NONE`.

This approach adds some level of complexity and might be more useful for projects with high security requirements. 

## Based on:

[Accessing the Firebase Auth user in SvelteKit server-side by Jeroen Pelgrims](https://jeroenpelgrims.com/access-the-firebase-auth-user-in-sveltekit-server-side/)



