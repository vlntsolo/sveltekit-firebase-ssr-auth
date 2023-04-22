// src/lib/firebase/client.ts
import { initializeApp, getApps, deleteApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
    PUBLIC_FIREBASE_PROJECT_ID,
    PUBLIC_FIREBASE_API_KEY,
    PUBLIC_FIREBASE_AUTH_DOMAIN,
    PUBLIC_FIREBASE_STORAGE_BUCKET,
    PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    PUBLIC_FIREBASE_APP_ID,
} from "$env/static/public";

function makeApp() {
    const apps = getApps();
    if (apps.length > 0) {
        if (apps.length > 1) {
            console.warn("Singleton firebase client expected. Found: ", apps.length)
            const app = apps.pop();
            apps.forEach(app => deleteApp(app));
            return app;
        } else return apps[0];
    }

    return initializeApp({
        apiKey: PUBLIC_FIREBASE_API_KEY,
        authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
        appId: PUBLIC_FIREBASE_APP_ID,
    });
}

const firebase = makeApp();
const auth = getAuth(firebase);

export { firebase, auth }

