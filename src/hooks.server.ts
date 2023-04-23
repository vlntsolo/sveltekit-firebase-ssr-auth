import type { Handle } from "@sveltejs/kit";
import { auth } from "$lib/firebase/admin";
import { redirect } from "@sveltejs/kit";
// import type { User } from "firebase/auth";

export const handle: Handle = async ({ event, resolve }) => {

    // Protect route with server-side firebase token validation
    // Replaces deprecated session handling in Sveltekit
    if (event.url.pathname.startsWith("/dashboard")) {
        try {
            const token = event.cookies.get("token");
            const firebaseUser = token ? await auth.verifyIdToken(token) : null;
            if (!token || !firebaseUser) {
                event.cookies.set("token", "", { maxAge: -1 });
                throw redirect(307, "/");
            }
            //@ts-ignore
            event.locals.user = firebaseUser;
        } catch {
            event.cookies.set("token", "", { maxAge: -1 });
            throw redirect(307, "/");
        }
    }

    return resolve(event);
}