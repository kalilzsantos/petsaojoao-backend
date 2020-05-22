import * as admin from "firebase-admin";
import dotenv from "dotenv";

import serviceAccount from "./ServiceAccountKey.json";

dotenv.config();

class FirebaseInit {
  static init() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.DB_URL,
    });
  }
}

export default FirebaseInit;
