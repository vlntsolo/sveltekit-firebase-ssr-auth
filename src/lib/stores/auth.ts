import cookie from "cookie";
import { browser } from "$app/environment";
import {
    GoogleAuthProvider,
    type User,
    signInWithPopup,
} from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "../firebase/client";


export const user = writable<User | null>(null);

export async function signOut() {
    return auth.signOut();
}

export async function signIn() {
    await signInWithPopup(auth, new GoogleAuthProvider());
}

if (browser) {
    auth.onIdTokenChanged(async (newUser) => {

        const tokenCurrentlySet =
            cookie.parse(document.cookie)["token"] !== undefined;

        const token = newUser ? await newUser?.getIdToken() : undefined;

        console.debug("tokenCurrentlySet", tokenCurrentlySet)
        console.debug("firebase client id token", token)

        document.cookie = cookie.serialize("token", token ?? "", {
            path: "/",
            maxAge: token ? undefined : 0,
            // httpOnly: true,
            sameSite: "strict"
        });
        user.set(newUser);

        // if (!tokenCurrentlySet && token) {
        //     document.location.reload();
        // }
    });

    // refresh the ID token every 10 minutes
    setInterval(async () => {
        if (auth.currentUser) {
            await auth.currentUser.getIdToken(true);
        }
    }, 10 * 60 * 1000);
}
