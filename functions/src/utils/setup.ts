import "dotenv/config";
import * as admin from "firebase-admin";

export const setup = () => {
  // Initialize Firebase Admin SDK
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FB_PROJECT_ID ?? "",
        privateKey: process.env.FB_PRIVATE_KEY ?? "",
        clientEmail: process.env.FB_CLIENT_EMAIL ?? "",
      }),
      storageBucket: process.env.FB_STORAGE_BUCKET ?? "",
      databaseURL: process.env.FB_DATABASE_URL ?? "",
    });
  }
}

setup();

export const firestore = admin.firestore();
export const storage = admin.storage();
