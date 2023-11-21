import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAeu4DR5Jm5hbw3j70Wq_-yHXsBtH0YTS0",
  authDomain: "web-design-ideas-snowfox.firebaseapp.com",
  projectId: "web-design-ideas-snowfox",
  storageBucket: "web-design-ideas-snowfox.appspot.com",
  messagingSenderId: "98449105268",
  appId: "1:98449105268:web:61bfd0315a5c0d3acb8c21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)