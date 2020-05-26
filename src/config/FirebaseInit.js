import * as admin from "firebase-admin";
import "dotenv/config";
import serviceAccount from "./ServiceAccountKey.json";

class FirebaseInit {
  static init() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.DB_URL,
    });
  }
}

export default FirebaseInit;
