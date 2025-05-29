import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDbibafHs30y0_7pGw0IkSSdDX0IMdyFeo",
  authDomain: "watt-dev-b251f.firebaseapp.com",
  projectId: "watt-dev-b251f",
  storageBucket: "watt-dev-b251f.firebasestorage.app",
  messagingSenderId: "852550789115",
  appId: "1:852550789115:web:77e161bcfeeac04d91cd5e",
  measurementId: "G-780EXYF5ZC",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
