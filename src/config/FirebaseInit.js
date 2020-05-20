import * as admin from "firebase-admin";
import serviceAccount from "./ServiceAccountKey.json";

class FirebaseInit {
  static init() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://petsaojoao-86487.firebaseio.com",
    });
  }
}

export default FirebaseInit;
