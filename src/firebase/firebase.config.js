// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR1zH_hYGqEg6weJVbBNEy3G4cq0pv5yk",
  authDomain: "assignment-10-client-321ad.firebaseapp.com",
  projectId: "assignment-10-client-321ad",
  storageBucket: "assignment-10-client-321ad.appspot.com",
  messagingSenderId: "1060267891724",
  appId: "1:1060267891724:web:5981d4a0f50ec1dcce2229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;